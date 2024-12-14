import { FormikProps } from 'formik';
import { Input } from "../ui/input";
import { FormData } from './types';
import { User, Phone, Mail, Home } from 'lucide-react';

interface PersonalDetailsStepProps {
  formikProps: FormikProps<FormData>;
  setCurrentStep: (step: 'complaint' | 'flight' | 'personal' | 'review') => void;
}

export const PersonalDetailsStep: React.FC<PersonalDetailsStepProps> = ({ formikProps }) => {
  const { values, handleChange, errors, touched, handleBlur } = formikProps;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Personal Information</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              First Name*
            </div>
          </label>
          <Input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.firstName && touched.firstName ? 'border-red-500' : ''}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Last Name*
            </div>
          </label>
          <Input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.lastName && touched.lastName ? 'border-red-500' : ''}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email*
            </div>
          </label>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'border-red-500' : ''}
          />
          {errors.email && touched.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number*
            </div>
          </label>
          <Input
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? 'border-red-500' : ''}
          />
          {errors.phone && touched.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Address*
            </div>
          </label>
          <Input
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.address && touched.address ? 'border-red-500' : ''}
          />
          {errors.address && touched.address && (
            <p className="text-red-500 text-sm">{errors.address}</p>
          )}
        </div>
      </div>
    </div>
  );
};