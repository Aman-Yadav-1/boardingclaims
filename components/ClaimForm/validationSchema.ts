import * as Yup from 'yup';

export const claimFormSchema = Yup.object().shape({
  // Complaint step
  complaintType: Yup.string().required('Please select a complaint type'),
  delayDuration: Yup.string().when('complaintType', {
    is: 'delay',
    then: () => Yup.string().required('Please select delay duration')
  }),

  // Flight step
  flightNumber: Yup.string()
    .required('Flight number is required')
    .matches(/^[A-Z0-9]{2,8}$/, 'Invalid flight number format'),
  departureAirport: Yup.string().required('Departure airport is required'),
  arrivalAirport: Yup.string().required('Arrival airport is required'),
  scheduledDate: Yup.string().required('Flight date is required'),
  hasStops: Yup.boolean(),
  stopFlights: Yup.array().when('hasStops', {
    is: true,
    then: () => Yup.array().of(
      Yup.object().shape({
        airport: Yup.string().required('Stop airport is required'),
        flightNumber: Yup.string()
          .required('Flight number is required')
          .matches(/^[A-Z0-9]{2,8}$/, 'Invalid flight number format')
      })
    )
  }),

  // Personal step
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: Yup.string().required('Address is required'),

  // Review step
  termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});