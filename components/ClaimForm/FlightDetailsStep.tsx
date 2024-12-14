import React, { useState } from 'react';
import { FormikProps } from 'formik';
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { FormData } from '@/components/ClaimForm/types';
import { Plane, Clock } from 'lucide-react';

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

export const FlightDetailsStep: React.FC<FlightDetailsStepProps> = ({ formikProps, airports }) => {
  const { values, handleChange, setFieldValue, errors, touched } = formikProps;
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false);
  const [numberOfStops, setNumberOfStops] = useState<number>(0);
  const [stopSearchTerms, setStopSearchTerms] = useState<string[]>([]);
  const [showStopDropdowns, setShowStopDropdowns] = useState<boolean[]>([]);

  const [departureSearchTerm, setDepartureSearchTerm] = useState(
    airports.find(a => a.code === values.departureAirport)?.name || ''
  );
  const [arrivalSearchTerm, setArrivalSearchTerm] = useState(
    airports.find(a => a.code === values.arrivalAirport)?.name || ''
  );

  const handleDepartureSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDepartureSearchTerm(value);
    if (!value) {
      setFieldValue('departureAirport', '');
    }
    setShowDepartureDropdown(value.length >= 2);
  };

  const handleArrivalSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setArrivalSearchTerm(value);
    if (!value) {
      setFieldValue('arrivalAirport', '');
    }
    setShowArrivalDropdown(value.length >= 2);
  };

  const handleStopSearch = (index: number, value: string) => {
    const newSearchTerms = [...stopSearchTerms];
    newSearchTerms[index] = value;
    setStopSearchTerms(newSearchTerms);

    const newShowDropdowns = [...showStopDropdowns];
    newShowDropdowns[index] = value.length >= 2;
    setShowStopDropdowns(newShowDropdowns);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-emerald-900">Flight Details</h2>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6">
          <div className="flex items-start gap-8">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-gray-700">From</label>
              <div className="flex-1 relative">
                <Input
                  type="text"
                  placeholder="Departure airport"
                  value={departureSearchTerm}
                  onChange={handleDepartureSearch}
                  onFocus={() => setShowDepartureDropdown(departureSearchTerm.length >= 2)}
                  onBlur={() => setTimeout(() => setShowDepartureDropdown(false), 200)}
                  className="w-full"
                />
                {showDepartureDropdown && departureSearchTerm.length >= 2 && (
                  <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
                    {airports
                      .filter(airport =>
                        airport.name.toLowerCase().includes(departureSearchTerm.toLowerCase()) ||
                        airport.code.toLowerCase().includes(departureSearchTerm.toLowerCase())
                      )
                      .map((airport) => (
                        <div
                          key={airport.code}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setFieldValue('departureAirport', airport.code);
                            setDepartureSearchTerm(airport.name);
                            setShowDepartureDropdown(false);
                          }}
                        >
                          <div className="font-medium">{airport.name}</div>
                          <div className="text-sm text-gray-500">{airport.code}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center self-end mb-2">
              <Plane className="w-5 h-5 text-emerald-600 transform rotate-90" />
            </div>

            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-gray-700">To</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Arrival airport"
                  value={arrivalSearchTerm}
                  onChange={handleArrivalSearch}
                  onFocus={() => setShowArrivalDropdown(arrivalSearchTerm.length >= 2)}
                  onBlur={() => setTimeout(() => setShowArrivalDropdown(false), 200)}
                  className="w-full"
                />
                {showArrivalDropdown && arrivalSearchTerm.length >= 2 && (
                  <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
                    {airports
                      .filter(airport =>
                        airport.code !== values.departureAirport &&
                        (airport.name.toLowerCase().includes(arrivalSearchTerm.toLowerCase()) ||
                        airport.code.toLowerCase().includes(arrivalSearchTerm.toLowerCase()))
                      )
                      .map((airport) => (
                        <div
                          key={airport.code}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setFieldValue('arrivalAirport', airport.code);
                            setArrivalSearchTerm(airport.name);
                            setShowArrivalDropdown(false);
                          }}
                        >
                          <div className="font-medium">{airport.name}</div>
                          <div className="text-sm text-gray-500">{airport.code}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Flight Number</label>
              <Input
                name="flightNumber"
                value={values.flightNumber}
                onChange={handleChange}
                placeholder="Flight No."
                className="capitalize w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Flight Date</label>
              <Input
                type="date"
                name="scheduledDate"
                value={values.scheduledDate}
                onChange={handleChange}
                className="w-[30%]"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <Checkbox
              id="isDirectFlight"
              checked={!values.hasStops}
              onCheckedChange={(checked) => {
                setFieldValue('hasStops', !checked);
                if (checked) {
                  setNumberOfStops(0);
                  setFieldValue('stopFlights', []);
                  setStopSearchTerms([]);
                  setShowStopDropdowns([]);
                }
              }}
            />
            <label htmlFor="isDirectFlight" className="text-sm font-medium text-gray-700">
              This was a direct flight
            </label>
          </div>
        </div>

        {values.hasStops && (
          <div className="border-t border-gray-100 p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-emerald-600" />
                <h3 className="font-semibold text-gray-900">Number of stops</h3>
                <div className="flex gap-2 ml-auto">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        setNumberOfStops(num);
                        setFieldValue('stopFlights', Array(num).fill({ airport: '', flightNumber: '' }));
                        setStopSearchTerms(Array(num).fill(''));
                        setShowStopDropdowns(Array(num).fill(false));
                      }}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
                        ${numberOfStops === num 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {Array.from({ length: numberOfStops }).map((_, index) => (
                <div key={index} className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-sm font-medium text-emerald-600">
                      {index + 1}
                    </div>
                    <h4 className="font-medium text-gray-900">Stop Details</h4>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex-1 relative">
                      <Input
                        type="text"
                        placeholder="Stop airport"
                        value={stopSearchTerms[index] || ''}
                        onChange={(e) => handleStopSearch(index, e.target.value)}
                        className="w-full pl-10 focus:ring-emerald-500"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      {showStopDropdowns[index] && stopSearchTerms[index]?.length >= 2 && (
                        <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
                          {airports
                            .filter(airport =>
                              airport.name.toLowerCase().includes(stopSearchTerms[index].toLowerCase()) ||
                              airport.code.toLowerCase().includes(stopSearchTerms[index].toLowerCase())
                            )
                            .map((airport) => (
                              <div
                                key={airport.code}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  const newStops = [...values.stopFlights];
                                  newStops[index] = { ...newStops[index], airport: airport.code };
                                  setFieldValue('stopFlights', newStops);
                                  
                                  const newSearchTerms = [...stopSearchTerms];
                                  newSearchTerms[index] = airport.name;
                                  setStopSearchTerms(newSearchTerms);
                                  
                                  const newShowDropdowns = [...showStopDropdowns];
                                  newShowDropdowns[index] = false;
                                  setShowStopDropdowns(newShowDropdowns);
                                }}
                              >
                                <div className="font-medium">{airport.name}</div>
                                <div className="text-sm text-gray-500">{airport.code}</div>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                    <Input
                      placeholder="Flight No."
                      value={values.stopFlights[index]?.flightNumber || ''}
                      onChange={(e) => {
                        const newStops = [...values.stopFlights];
                        newStops[index] = { ...newStops[index], flightNumber: e.target.value };
                        setFieldValue('stopFlights', newStops);
                      }}
                      className="capitalize w-[150px] text-center font-medium focus:ring-emerald-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(!values.departureAirport || !values.arrivalAirport || !values.flightNumber || !values.scheduledDate) && (
          <div className="border-t border-gray-100 p-6">
            <div className="flex items-center gap-2 text-red-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Departure airport, arrival airport, flight number and date are required fields</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDetailsStep;
