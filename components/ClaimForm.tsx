'use client'
import { useState, useEffect } from "react";
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAirports } from '@/lib/lufthansa-api';
import { ComplaintTypeStep } from "@/components/ClaimForm/ComplaintTypeStep";
import { FlightDetailsStep } from "@/components/ClaimForm/FlightDetailsStep";
import { PersonalDetailsStep } from "@/components/ClaimForm/PersonalDetailsStep";
import { ReviewStep } from "@/components/ClaimForm/ReviewStep"
import { claimFormSchema } from '@/components/ClaimForm/validationSchema';
import { FormData } from "@/components/ClaimForm/types";
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
  hasStops: false,
  stopFlights: [],
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
  const [completedSteps, setCompletedSteps] = useState<Set<FormStep>>(new Set());

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Progress Steps Box - Now responsive */}
        <div className="lg:col-span-3 order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-24">
            <h3 className="text-lg font-semibold mb-6 lg:mb-8 text-gray-800">Claim Progress</h3>
            
            {/* Progress on mobile - Horizontal steps */}
            <div className="flex lg:hidden justify-between mb-6">
              {Object.entries(steps).map(([key, step]) => (
                <div key={key} className="flex flex-col items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    transition-all duration-200 ease-in-out
                    ${currentStep === key
                      ? 'bg-emerald-500 text-white ring-4 ring-emerald-100'
                      : completedSteps.has(key as FormStep)
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white border-2 border-gray-300'
                    }
                  `}>
                    {completedSteps.has(key as FormStep)
                      ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      : step.number
                    }
                  </div>
                  <span className="text-xs mt-2 hidden sm:block">{step.title}</span>
                </div>
              ))}
            </div>

            {/* Progress on desktop - Vertical steps */}
            <div className="hidden lg:block relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="space-y-8">
                {Object.entries(steps).map(([key, step]) => (
                  <div key={key} className="relative flex items-center">
                    {/* Step indicator */}
                    <div
                      className={`
                w-8 h-8 rounded-full flex items-center justify-center z-10
                transition-all duration-200 ease-in-out
                ${currentStep === key
                          ? 'bg-emerald-500 text-white ring-4 ring-emerald-100'
                          : completedSteps.has(key as FormStep)
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white border-2 border-gray-300'
                        }
              `}
                    >
                      {completedSteps.has(key as FormStep)
                        ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        : step.number
                      }
                    </div>

                    {/* Step text */}
                    <div className="ml-4 flex-1">
                      <h4 className={`font-medium transition-colors
                ${currentStep === key
                          ? 'text-emerald-600'
                          : completedSteps.has(key as FormStep)
                            ? 'text-gray-700'
                            : 'text-gray-400'
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="lg:col-span-9 order-1 lg:order-2">
          <Card className="p-4 sm:p-6 lg:p-8 shadow-lg">
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

                  {/* Responsive buttons */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
                    {currentStep !== 'complaint' && (
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full sm:w-auto order-2 sm:order-1"
                        onClick={() => {
                          const steps: FormStep[] = ['complaint', 'flight', 'personal', 'review'];
                          const currentIndex = steps.indexOf(currentStep);
                          const previousStep = steps[currentIndex - 1];

                          // Remove current step from completed steps
                          setCompletedSteps(prev => {
                            const newSet = new Set(prev);
                            newSet.delete(currentStep);
                            return newSet;
                          });

                          setCurrentStep(previousStep);
                        }}
                      >
                        Previous
                      </Button>
                    )}

                    {currentStep !== 'review' ? (
                      <Button
                        type="button"
                        variant="cta"
                        className="w-full sm:w-auto px-7 text-[14px] order-1 sm:order-2"
                        onClick={async (e) => {
                          e.preventDefault(); // Prevent any form submission
                          const steps: FormStep[] = ['complaint', 'flight', 'personal', 'review'];
                          const currentIndex = steps.indexOf(currentStep);
                          const errors = await formikProps.validateForm();

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
                            setCompletedSteps(prev => new Set([...prev, currentStep]));
                            setCurrentStep(steps[currentIndex + 1]);
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
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 order-1 sm:order-2"
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
      </div>
    </div>
  );
}

export default ClaimForm;
