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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['delay', 'denied', 'cancelled'].map((type) => (
                      <div
                        key={type}
                        onClick={() => setFieldValue('complaintType', type)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          values.complaintType === type 
                            ? 'border-emerald-500 bg-emerald-50' 
                            : 'border-gray-200 hover:border-emerald-200'
                        }`}
                      >
                        <h3 className="text-xl font-semibold capitalize mb-2">{type} Flight</h3>
                        <p className="text-gray-600 text-sm">
                          {type === 'delay' && 'Flight delayed more than 2 hours'}
                          {type === 'denied' && 'Denied boarding due to overbooking'}
                          {type === 'cancelled' && 'Flight was cancelled'}
                        </p>
                      </div>
                    ))}
                  </div>
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