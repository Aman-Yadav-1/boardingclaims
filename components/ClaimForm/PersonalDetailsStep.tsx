import { StepProps } from '@/components/ClaimForm/types';
import { Button } from "@/components/ui/button";

export const PersonalDetailsStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Personal Information</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">First Name*</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Last Name*</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email*</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button 
          onClick={() => setCurrentStep('flight')}
          variant="outline"
          className="px-8"
        >
          Previous
        </Button>
        <Button 
          onClick={() => setCurrentStep('review')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
        >
          Review Claim
        </Button>
      </div>
    </div>
  );
};
