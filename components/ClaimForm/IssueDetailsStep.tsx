import { StepProps } from '@/components/ClaimForm/types';
import { Button } from "../ui/button";

export const IssueDetailsStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Issue Details</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Type of Issue*</label>
          <select
            value={formData.issueType}
            onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
          >
            <option value="">Select issue type</option>
            <option value="delay">Flight Delay</option>
            <option value="cancellation">Flight Cancellation</option>
            <option value="denied-boarding">Denied Boarding</option>
            <option value="missed-connection">Missed Connection</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Delay Duration (if applicable)</label>
          <select
            value={formData.delayDuration}
            onChange={(e) => setFormData({ ...formData, delayDuration: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
          >
            <option value="">Select delay duration</option>
            <option value="2-3">2-3 hours</option>
            <option value="3-4">3-4 hours</option>
            <option value="4+">More than 4 hours</option>
          </select>
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
          onClick={() => setCurrentStep('personal')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};
