import { jsPDF } from 'jspdf';
import { FormData } from '@/components/ClaimForm/types';

export const generateClaimPDF = (data: FormData) => {
  const doc = new jsPDF();
  
  doc.setFontSize(16);
  doc.text('Claim Details', 20, 20);
  
  doc.setFontSize(12);
  doc.text(`Flight: ${data.flightNumber}`, 20, 40);
  doc.text(`Date: ${data.scheduledDate}`, 20, 50);
  // Add more fields
  
  return doc;
};
