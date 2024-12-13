import { jsPDF } from 'jspdf';
import { FormData } from '@/components/ClaimForm/types';

export const generateClaimPDF = (data: FormData) => {
  const doc = new jsPDF();

  // Add header with better styling
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102); // Dark blue color
  doc.text('BOARDING CLAIMS', 105, 20, { align: 'center' });

  // Add a horizontal line below the header
  doc.setDrawColor(0, 51, 102); // Dark blue color
  doc.line(10, 25, 200, 25);

  // Add subtitle
  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0); // Black color
  doc.text('Claim Details', 105, 35, { align: 'center' });

  // Add claim details with better styling
  doc.setFontSize(12);
  const startY = 45;
  const lineHeight = 10;
  let currentY = startY;

  const addDetail = (label: string, value: string) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, 20, currentY);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 70, currentY);
    currentY += lineHeight;
  };

  const formatAirport = (code: string, name: string) => `${code} (${name})`;

  addDetail('Flight Number', data.flightNumber);
  addDetail('Scheduled Date', data.scheduledDate);
  addDetail('Departure Airport', data.departureAirport);
  addDetail('Arrival Airport', data.arrivalAirport);
  addDetail('First Name', data.firstName);
  addDetail('Last Name', data.lastName);
  addDetail('Email', data.email);
  addDetail('Phone', data.phone);
  addDetail('Address', data.address);
  addDetail('Remarks', data.remarks);

  // Add footer
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128); // Gray color
  doc.text('Thank you for using Boarding Claims', 105, 280, { align: 'center' });

  return doc;
};