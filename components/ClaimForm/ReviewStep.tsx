import { FormikProps } from 'formik';
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { FormData } from './types';
import { Card } from '../ui/card';
import { Plane, User, AlertCircle } from 'lucide-react';

interface ReviewStepProps {
  formikProps: FormikProps<FormData>;
  setCurrentStep: (step: 'complaint' | 'flight' | 'personal' | 'review') => void;
}

export const ReviewStep: React.FC<ReviewStepProps> = ({ formikProps, setCurrentStep }) => {
  const { values, handleChange, setFieldValue, errors, touched } = formikProps;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Review Your Claim</h2>
      
      <div className="space-y-8">
        <div className="grid gap-6">
          {/* Flight Details Card */}
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-emerald-100">
                <Plane className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="w-full">
                <h3 className="font-semibold mb-4">Flight Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Flight Number</p>
                    <p className="font-medium">{values.flightNumber}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date</p>
                    <p className="font-medium">{values.scheduledDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Departure</p>
                    <p className="font-medium">{values.departureAirport}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Arrival</p>
                    <p className="font-medium">{values.arrivalAirport}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Complaint Details Card */}
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-emerald-100">
                <AlertCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="w-full">
                <h3 className="font-semibold mb-4">Complaint Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Issue Type</p>
                    <p className="font-medium capitalize">{values.complaintType}</p>
                  </div>
                  {values.complaintType === 'delay' && (
                    <div>
                      <p className="text-gray-600">Delay Duration</p>
                      <p className="font-medium">{values.delayDuration}</p>
                    </div>
                  )}
                  {values.complaintType === 'denied' && (
                    <div>
                      <p className="text-gray-600">Boarding Status</p>
                      <p className="font-medium">Denied due to overbooking</p>
                    </div>
                  )}
                  {values.complaintType === 'cancelled' && (
                    <div>
                      <p className="text-gray-600">Flight Status</p>
                      <p className="font-medium">Cancelled</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Personal Details Card */}
          <Card className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-emerald-100">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="w-full">
                <h3 className="font-semibold mb-4">Personal Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">First Name</p>
                    <p className="font-medium">{values.firstName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Name</p>
                    <p className="font-medium">{values.lastName}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="font-medium">{values.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="termsAccepted"
              checked={values.termsAccepted}
              onCheckedChange={(checked) => setFieldValue('termsAccepted', checked)}
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-700">
              I accept the terms and conditions*
            </label>
          </div>
          {errors.termsAccepted && touched.termsAccepted && (
            <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
          )}

          <Textarea
            name="remarks"
            value={values.remarks}
            onChange={handleChange}
            placeholder="Additional remarks (optional)"
            className="w-full"
            rows={4}
          />
        </div>
      </div>
    </div>
  );
};
