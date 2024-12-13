import { FormikProps } from 'formik';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FormData } from './types';

interface ComplaintTypeStepProps {
  formikProps: FormikProps<FormData>;
  setCurrentStep: (step: 'complaint' | 'flight' | 'personal' | 'review') => void;
}

export const ComplaintTypeStep: React.FC<ComplaintTypeStepProps> = ({ formikProps }) => {
  const { values, setFieldValue, errors, touched } = formikProps;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Select Complaint Type</h2>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Type of Issue*</label>
          <Select
            value={values.complaintType}
            onValueChange={(value) => setFieldValue('complaintType', value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select issue type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delay">Flight Delay</SelectItem>
              <SelectItem value="denied">Denied Boarding</SelectItem>
              <SelectItem value="cancelled">Cancelled Flight</SelectItem>
            </SelectContent>
          </Select>
          {errors.complaintType && touched.complaintType && (
            <p className="text-red-500 text-sm">{errors.complaintType}</p>
          )}
        </div>

        {values.complaintType === 'delay' && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Delay Duration*</label>
            <Select
              value={values.delayDuration}
              onValueChange={(value) => setFieldValue('delayDuration', value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select delay duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2-3">2-3 hours</SelectItem>
                <SelectItem value="3-4">3-4 hours</SelectItem>
                <SelectItem value="4+">More than 4 hours</SelectItem>
              </SelectContent>
            </Select>
            {errors.delayDuration && touched.delayDuration && (
              <p className="text-red-500 text-sm">{errors.delayDuration}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};