'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { AnimatePresence, motion } from "framer-motion";
import { FlightDetailsStep } from "./ClaimForm/FlightDetailsStep";
import { IssueDetailsStep } from "./ClaimForm/IssueDetailsStep";
import { PersonalDetailsStep } from "./ClaimForm/PersonalDetailsStep";
import { ReviewStep } from "./ClaimForm/ReviewStep";
import { ComplaintTypeStep } from "./ClaimForm/ComplaintTypeStep";

type FormStep = 'complaint' | 'flight' | 'personal' | 'review';

const ClaimForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('complaint');
  const [formData, setFormData] = useState({
    // Complaint Type (Required first)
    complaintType: "",
    delayDuration: "",
    
    // Flight Details
    flightNumber: "",
    departureAirport: "",
    arrivalAirport: "",
    scheduledDate: "",
    
    // Optional Connected Flight
    hasConnectedFlight: false,
    connectedFlightNumber: "",
    connectedDepartureAirport: "",
    connectedArrivalAirport: "",
    connectedScheduledDate: "",
    
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    
    // Additional
    remarks: "",
    termsAccepted: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: FormStep) => {
    const newErrors: Record<string, string> = {};
    
    switch (step) {
      case 'complaint':
        // Complaint Type validation
        if (!formData.complaintType) {
          newErrors.complaintType = 'Please select a complaint type';
        }
        if (formData.complaintType === 'delay' && !formData.delayDuration) {
          newErrors.delayDuration = 'Please select delay duration';
        }
        break;

      case 'flight':
        // Main Flight Details validation
        if (!formData.flightNumber) {
          newErrors.flightNumber = 'Flight number is required';
        }
        if (!formData.departureAirport) {
          newErrors.departureAirport = 'Departure airport is required';
        }
        if (!formData.arrivalAirport) {
          newErrors.arrivalAirport = 'Arrival airport is required';
        }
        if (!formData.scheduledDate) {
          newErrors.scheduledDate = 'Flight date is required';
        }
        
        // Connected Flight validation (if applicable)
        if (formData.hasConnectedFlight) {
          if (!formData.connectedFlightNumber) {
            newErrors.connectedFlightNumber = 'Connected flight number is required';
          }
          if (!formData.connectedDepartureAirport) {
            newErrors.connectedDepartureAirport = 'Connected departure airport is required';
          }
          if (!formData.connectedArrivalAirport) {
            newErrors.connectedArrivalAirport = 'Connected arrival airport is required';
          }
          if (!formData.connectedScheduledDate) {
            newErrors.connectedScheduledDate = 'Connected flight date is required';
          }
        }
        break;

      case 'personal':
        // Personal Details validation
        if (!formData.firstName) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone) {
          newErrors.phone = 'Phone number is required';
        }
        if (!formData.address) {
          newErrors.address = 'Address is required';
        }
        break;

      case 'review':
        // Terms & Conditions validation
        if (!formData.termsAccepted) {
          newErrors.termsAccepted = 'You must accept the terms and conditions';
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (nextStep: FormStep) => {
    if (validateStep(currentStep)) {
      setCurrentStep(nextStep);
    }
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
      {/* Progress Indicator */}
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

      {/* Form Card */}
      <Card className="p-8 shadow-lg border-t-4 border-t-emerald-500">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <FormContent 
              currentStep={currentStep} 
              formData={formData} 
              setFormData={setFormData}
              setCurrentStep={setCurrentStep}
            />
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

// Create separate components for each form step
const FormContent: React.FC<{
  currentStep: FormStep;
  formData: any;
  setFormData: (data: any) => void;
  setCurrentStep: (step: FormStep) => void;
}> = ({ currentStep, formData, setFormData, setCurrentStep }) => {
  switch (currentStep) {
    case 'complaint':
      return <ComplaintTypeStep formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />;
    case 'flight':
      return <FlightDetailsStep formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />;
    case 'personal':
      return <PersonalDetailsStep formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep} />;
    case 'review':
      return <ReviewStep formData={formData} setFormData={setFormData} setCurrentStep={setCurrentStep as (step: "flight" | "personal" | "review" | "issue") => void} />;
    default:
      return null;
  }
};
export default ClaimForm;