import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { StepProps } from "./types";

interface ReviewStepProps {
  formData: any;
  setFormData: (data: any) => void;
  setCurrentStep: (step: 'flight' | 'issue' | 'personal' | 'review') => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ formData, setFormData, setCurrentStep }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      
    if (!formData.termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return;
    }
  
    toast.success('Claim submitted successfully!');
    
    // Add timeout to reload page after 5 seconds
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Review Your Claim</h2>
      
      <div className="space-y-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Flight Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Flight Number</p>
              <p className="font-medium">{formData.flightNumber}</p>
            </div>
            <div>
              <p className="text-gray-600">Date</p>
              <p className="font-medium">{formData.scheduledDate}</p>
            </div>
            <div>
              <p className="text-gray-600">From</p>
              <p className="font-medium">{formData.departureAirport}</p>
            </div>
            <div>
              <p className="text-gray-600">To</p>
              <p className="font-medium">{formData.arrivalAirport}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Issue Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Issue Type</p>
              <p className="font-medium">{formData.issueType}</p>
            </div>
            <div>
              <p className="text-gray-600">Delay Duration</p>
              <p className="font-medium">{formData.delayDuration} hours</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Personal Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="font-medium">{`${formData.firstName} ${formData.lastName}`}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Phone</p>
              <p className="font-medium">{formData.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
        <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
            className="h-4 w-4 text-emerald-600"
            required
          />
          <label className="ml-2 text-sm text-gray-600">
            I accept the terms and conditions*
          </label>
        </div>

        <textarea
          value={formData.remarks}
          onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
          placeholder="Additional remarks (optional)"
          className="w-full p-4 border-2 border-gray-200 rounded-xl"
          rows={4}
        />
      </div>

      <div className="flex justify-between mt-8">
        <Button 
          onClick={() => setCurrentStep('personal')}
          variant="outline"
          className="px-8"
        >
          Previous
        </Button>
        <Button 
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
        >
          Submit Claim
        </Button>
      </div>
    </form>
  );
};