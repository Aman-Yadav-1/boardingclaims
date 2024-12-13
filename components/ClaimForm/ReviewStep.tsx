import { FormikProps } from 'formik';
import { Checkbox } from "../ui/checkbox";
import { Textarea } from "../ui/textarea";
import { FormData } from './types';

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
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Flight Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Flight Number</p>
              <p className="font-medium">{values.flightNumber}</p>
            </div>
            <div>
              <p className="text-gray-600">Date</p>
              <p className="font-medium">{values.scheduledDate}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-3">Personal Details</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Name</p>
              <p className="font-medium">{`${values.firstName} ${values.lastName}`}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{values.email}</p>
            </div>
          </div>
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
