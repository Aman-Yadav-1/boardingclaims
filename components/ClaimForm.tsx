'use client'
import { useState } from "react";

const ClaimForm: React.FC = () => {
  const [formData, setFormData] = useState({
    complaintType: "",
    flightNumber: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto mt-10"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Submit Your Claim</h2>
      <label className="block text-sm font-medium mb-2">Type of Complaint</label>
      <select
        name="complaintType"
        className="w-full p-3 border rounded-lg mb-4"
        value={formData.complaintType}
        onChange={handleInputChange}
      >
        <option value="">Select</option>
        <option value="flight-delay">Flight Delay</option>
        <option value="denied-boarding">Denied Boarding</option>
        <option value="cancelled-flight">Cancelled Flight</option>
      </select>
      <label className="block text-sm font-medium mb-2">Flight Details</label>
      <input
        name="flightNumber"
        type="text"
        placeholder="Flight Number"
        className="w-full p-3 border rounded-lg mb-4"
        value={formData.flightNumber}
        onChange={handleInputChange}
      />
      <label className="block text-sm font-medium mb-2">Personal Details</label>
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="w-full p-3 border rounded-lg mb-4"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full p-3 border rounded-lg mb-4"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        className="w-full p-3 border rounded-lg mb-4"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <div className="flex items-center mb-6">
        <input type="checkbox" id="terms" className="mr-2" required />
        <label htmlFor="terms" className="text-sm">
          Accept Terms and Conditions
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ClaimForm;
