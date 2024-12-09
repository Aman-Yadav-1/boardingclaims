export interface StepProps {
    formData: any;
    setFormData: (data: any) => void;
    setCurrentStep: (step: 'complaint' | 'flight' | 'personal' | 'review') => void;
  }
  