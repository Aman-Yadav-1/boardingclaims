import React, { useState, useMemo, useCallback } from 'react';
import { FormikProps } from 'formik';
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { FormData } from '@/components/ClaimForm/types';
import { Calendar, Plane } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { debounce } from 'lodash';

interface Airport {
  code: string;
  name: string;
  cityCode: string;
  countryCode: string;
}

type FormStep = 'complaint' | 'flight' | 'personal' | 'review';

interface FlightDetailsStepProps {
  formikProps: FormikProps<FormData>;
  setCurrentStep: (step: FormStep) => void;
  airports: Airport[];
}

export const FlightDetailsStep: React.FC<FlightDetailsStepProps> = ({ formikProps, setCurrentStep, airports }) => {
  const { values, handleChange, setFieldValue, errors, touched } = formikProps;
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange: (term: string) => void = useCallback(
    debounce((term: string) => setSearchTerm(term), 300),
    []
  );

  const availableArrivalAirports = useMemo(
    () => airports.filter(airport => airport.code !== values.departureAirport),
    [airports, values.departureAirport]
  );

  const filteredAirports = useMemo(
    () => airports.filter(airport =>
      airport.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.code.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [airports, searchTerm]
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-emerald-900">Flight Details</h2>
      
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                Flight Number*
              </div>
            </label>
            <Input
              name="flightNumber"
              value={values.flightNumber}
              onChange={handleChange}
              placeholder="e.g., LH1234"
            />
            {errors.flightNumber && touched.flightNumber && (
              <p className="text-red-500 text-sm">{errors.flightNumber}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Flight Date*
              </div>
            </label>
            <Input
              type="date"
              name="scheduledDate"
              value={values.scheduledDate}
              onChange={handleChange}
            />
            {errors.scheduledDate && touched.scheduledDate && (
              <p className="text-red-500 text-sm">{errors.scheduledDate}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Departure Airport*</label>
            <Select
              value={values.departureAirport}
              onValueChange={(value) => {
                setFieldValue('departureAirport', value);
                if (value === values.arrivalAirport) {
                  setFieldValue('arrivalAirport', '');
                }
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select departure airport" />
              </SelectTrigger>
              <SelectContent>
                {filteredAirports.map((airport, index) => (
                  <SelectItem key={`${airport.code}-${index}`} value={airport.code}>
                    {airport.name ? `${airport.name} (${airport.code})` : airport.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.departureAirport && touched.departureAirport && (
              <p className="text-red-500 text-sm">{errors.departureAirport}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Arrival Airport*</label>
            <Select
              value={values.arrivalAirport}
              onValueChange={(value) => setFieldValue('arrivalAirport', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select arrival airport" />
              </SelectTrigger>
              <SelectContent>
                {availableArrivalAirports.map((airport, index) => (
                  <SelectItem key={`${airport.code}-${index}`} value={airport.code}>
                    {airport.name ? `${airport.name} (${airport.code})` : airport.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.arrivalAirport && touched.arrivalAirport && (
              <p className="text-red-500 text-sm">{errors.arrivalAirport}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hasConnectedFlight"
              checked={values.hasConnectedFlight}
              onCheckedChange={(checked) => setFieldValue('hasConnectedFlight', checked)}
            />
            <label htmlFor="hasConnectedFlight" className="text-sm font-medium text-gray-700">
              I had a connecting flight
            </label>
          </div>

          {values.hasConnectedFlight && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Connected Flight Number*</label>
                <Input
                  name="connectedFlightNumber"
                  value={values.connectedFlightNumber}
                  onChange={handleChange}
                  placeholder="e.g., LH5678"
                />
                {errors.connectedFlightNumber && touched.connectedFlightNumber && (
                  <p className="text-red-500 text-sm">{errors.connectedFlightNumber}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Connected Flight Date*</label>
                <Input
                  type="date"
                  name="connectedScheduledDate"
                  value={values.connectedScheduledDate}
                  onChange={handleChange}
                />
                {errors.connectedScheduledDate && touched.connectedScheduledDate && (
                  <p className="text-red-500 text-sm">{errors.connectedScheduledDate}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};