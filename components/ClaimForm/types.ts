export interface FormData {
  complaintType: string;
  delayDuration: string;
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  scheduledDate: string;
  hasConnectedFlight: boolean;
  connectedFlightNumber: string;
  connectedDepartureAirport: string;
  connectedArrivalAirport: string;
  connectedScheduledDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  remarks: string;
  termsAccepted: boolean;
}

export interface StepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  setCurrentStep: (step: 'complaint' | 'flight' | 'personal' | 'review') => void;
}
