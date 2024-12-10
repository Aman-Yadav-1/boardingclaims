import { StepProps } from './types';
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

  interface FormDataWithErrors extends StepProps {
    errors?: {
      complaintType?: string
    }
  }

  export const ComplaintTypeStep: React.FC<FormDataWithErrors> = ({ formData, setFormData, setCurrentStep }) => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-emerald-900">Select Complaint Type</h2>
      
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Type of Issue*</label>
            <Select
              value={formData.complaintType}
              onValueChange={(value) => setFormData({ ...formData, complaintType: value })}
              required
            >
              <SelectTrigger className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500">
                <SelectValue placeholder="Select issue type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="delay">Flight Delay</SelectItem>
                <SelectItem value="denied">Denied Boarding</SelectItem>
                <SelectItem value="cancelled">Cancelled Flight</SelectItem>
              </SelectContent>
            </Select>
            {(formData as unknown as FormDataWithErrors).errors?.complaintType && (
              <p className="text-red-500 text-sm mt-1">{(formData as unknown as FormDataWithErrors).errors?.complaintType}</p>
            )}
          </div>
          {formData.complaintType === 'delay' && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Delay Duration*</label>
              <Select
                value={formData.delayDuration}
                onValueChange={(value) => setFormData({ ...formData, delayDuration: value })}
                required
              >
                <SelectTrigger className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-3">2-3 hours</SelectItem>
                  <SelectItem value="3-4">3-4 hours</SelectItem>
                  <SelectItem value="4+">More than 4 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div className="flex justify-end mt-8">
          <Button 
            onClick={() => setCurrentStep('flight')}
            disabled={!formData.complaintType || (formData.complaintType === 'delay' && !formData.delayDuration)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8"
          >
            Next Step
          </Button>
        </div>
      </div>
    );
};