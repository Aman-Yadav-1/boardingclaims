import { StepProps } from '@/components/ClaimForm/types';
import { Button } from "../ui/button";

export const FlightDetailsStep: React.FC<StepProps> = ({ formData, setFormData, setCurrentStep }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Flight Details</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Flight Number*</label>
          <input
            type="text"
            value={formData.flightNumber}
            onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g., BA1234"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Flight Date*</label>
          <input
            type="date"
            value={formData.scheduledDate}
            onChange={(e) => setFormData({ ...formData, scheduledDate: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Departure Airport*</label>
          <input
            type="text"
            value={formData.departureAirport}
            onChange={(e) => setFormData({ ...formData, departureAirport: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g., London Heathrow"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Arrival Airport*</label>
          <input
            type="text"
            value={formData.arrivalAirport}
            onChange={(e) => setFormData({ ...formData, arrivalAirport: e.target.value })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g., Paris CDG"
            required
          />
        </div>
      </div>

      <div className="flex justify-end mt-8">
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