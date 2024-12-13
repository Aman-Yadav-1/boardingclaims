'use client'
import { useState, useEffect } from "react";
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { getAirports } from '@/lib/lufthansa-api';
import { ComplaintTypeStep } from "@/components/ClaimForm/ComplaintTypeStep";
import { FlightDetailsStep } from "@/components/ClaimForm/FlightDetailsStep";
import { PersonalDetailsStep } from "@/components/ClaimForm/PersonalDetailsStep";
import { ReviewStep } from "@/components/ClaimForm/ReviewStep"
import { claimFormSchema } from '@/components/ClaimForm/validationSchema';
import { FormData } from "@/components/ClaimForm/types";
import jsPDF from "jspdf";
import { generateClaimPDF } from '@/lib/pdf-generator';

interface Airport {
  code: string;
  name: string;
  cityCode: string;
  countryCode: string;
}

type FormStep = 'complaint' | 'flight' | 'personal' | 'review';

const initialValues: FormData = {
  complaintType: "",
  delayDuration: "",
  flightNumber: "",
  departureAirport: "",
  arrivalAirport: "",
  scheduledDate: "",
  hasConnectedFlight: false,
  connectedFlightNumber: "",
  connectedDepartureAirport: "",
  connectedArrivalAirport: "",
  connectedScheduledDate: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  remarks: "",
  termsAccepted: false
};

const ClaimForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('complaint');
  const [isLoading, setIsLoading] = useState(true);
  const [airports, setAirports] = useState<Airport[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAirports = async () => {
      try {
        setIsLoading(true);
        const airportData = await getAirports();
        if (airportData && airportData.length > 0) {
          setAirports(airportData);
          setError(null);
        } else {
          setError("No airports data available");
        }
      } catch (err) {
        setError("Failed to load airports data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    loadAirports();
  }, []);

  const handleSubmit = async (values: FormData, actions: FormikHelpers<FormData>) => {
    try {
      const pdf = generateClaimPDF(values);
      pdf.save(`claim-${values.flightNumber}.pdf`);
    } catch (error) {
      console.error('PDF generation error:', error);
    }
    actions.setSubmitting(false);
  };
    
  const steps = {
    complaint: { number: 1, title: "Complaint Type" },
    flight: { number: 2, title: "Flight Details" },
    personal: { number: 3, title: "Personal Details" },
    review: { number: 4, title: "Review & Submit" }
  };

  const getProgress = () => {
    const stepNumbers = { complaint: 25, flight: 50, personal: 75, review: 100 };
    return stepNumbers[currentStep];
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Progress value={getProgress()} className="h-2 bg-emerald-100" />
        <div className="flex justify-between mt-4">
          {Object.entries(steps).map(([key, step]) => (
            <div
              key={key}
              className={`text-sm font-medium ${
                currentStep === key ? 'text-emerald-600' : 'text-gray-400'
              }`}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      <Card className="p-8 shadow-lg border-t-4 border-t-emerald-500 ">
        <Formik
          initialValues={initialValues}
          validationSchema={claimFormSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps: FormikProps<FormData>) => (
            <Form className="space-y-6">
              {currentStep === 'complaint' && (
                <ComplaintTypeStep formikProps={formikProps} setCurrentStep={setCurrentStep as (step: FormStep) => void} />
              )}
              {currentStep === 'flight' && (
                <FlightDetailsStep formikProps={formikProps} setCurrentStep={setCurrentStep as (step: FormStep) => void} airports={airports} />
              )}
              {currentStep === 'personal' && (
                <PersonalDetailsStep formikProps={formikProps} setCurrentStep={setCurrentStep as (step: FormStep) => void} />
              )}
              {currentStep === 'review' && (
                <ReviewStep formikProps={formikProps} setCurrentStep={setCurrentStep as (step: FormStep) => void} />
              )}

              <div className="flex justify-between pt-6">
                {currentStep !== 'complaint' && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      const steps: FormStep[] = ['complaint', 'flight', 'personal', 'review'];
                      const currentIndex = steps.indexOf(currentStep);
                      setCurrentStep(steps[currentIndex - 1]);
                    }}
                  >
                    Previous
                  </Button>
                )}
                {currentStep !== 'review' ? (
                  <Button
                    type="button"
                    variant="cta"
                    className="px-7 text-[14px]"
                    onClick={async () => {
                      const steps: FormStep[] = ['complaint', 'flight', 'personal', 'review'];
                      const currentIndex = steps.indexOf(currentStep);
                      const errors = await formikProps.validateForm();
                      
                      // Check only fields relevant to current step
                      const currentStepFields = Object.keys(errors).filter(field => {
                        switch (currentStep) {
                          case 'complaint':
                            return ['complaintType', 'delayDuration'].includes(field);
                          case 'flight':
                            return ['flightNumber', 'departureAirport', 'arrivalAirport', 'scheduledDate'].includes(field);
                          case 'personal':
                            return ['firstName', 'lastName', 'email', 'phone', 'address'].includes(field);
                          default:
                            return false;
                        }
                      });

                      if (currentStepFields.length === 0) {
                        setCurrentStep(steps[currentIndex + 1]);
                      } else {
                        // Touch all fields in current step to show validation errors
                        currentStepFields.forEach(field => {
                          formikProps.setFieldTouched(field, true);
                        });
                      }
                    }}
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="cta"
                    disabled={formikProps.isSubmitting}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Submit Claim
                  </Button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default ClaimForm;