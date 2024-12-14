import { jsPDF } from 'jspdf';
import { FormData } from '@/components/ClaimForm/types';

export const generateClaimPDF = (data: FormData) => {
  const doc = new jsPDF();
  
  // Add logo and branding
  doc.setFillColor(0, 150, 136); // Emerald color
  doc.rect(0, 0, 220, 40, 'F');
  
  // Header
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('BOARDING CLAIMS', 105, 25, { align: 'center' });
  
  // Claim Reference
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(12);
  doc.text(`Claim Reference: BC-${Date.now().toString().slice(-6)}`, 20, 50);
  
  // Sections with better visual hierarchy
  const addSection = (title: string, startY: number) => {
    doc.setFillColor(240, 240, 240);
    doc.rect(20, startY - 5, 170, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 150, 136);
    doc.text(title, 25, startY);
    return startY + 15;
  };

  let yPos = 70;
  
  // Flight Information
  yPos = addSection('FLIGHT INFORMATION', yPos);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text(`Flight Number: ${data.flightNumber}`, 25, yPos);
  doc.text(`Date: ${data.scheduledDate}`, 120, yPos);
  yPos += 10;
  doc.text(`From: ${data.departureAirport}`, 25, yPos);
  doc.text(`To: ${data.arrivalAirport}`, 120, yPos);
  
  // Complaint Details
  yPos = addSection('COMPLAINT DETAILS', yPos + 20);
  doc.text(`Type: ${data.complaintType.toUpperCase()}`, 25, yPos);
  if (data.complaintType === 'delay') {
    doc.text(`Duration: ${data.delayDuration}`, 120, yPos);
  }
  
  // Passenger Information
  yPos = addSection('PASSENGER INFORMATION', yPos + 20);
  doc.text(`Name: ${data.firstName} ${data.lastName}`, 25, yPos);
  yPos += 10;
  doc.text(`Email: ${data.email}`, 25, yPos);
  yPos += 10;
  doc.text(`Phone: ${data.phone}`, 25, yPos);
  
  // Additional Remarks
  if (data.remarks) {
    yPos = addSection('ADDITIONAL REMARKS', yPos + 20);
    doc.text(data.remarks, 25, yPos, { maxWidth: 160 });
  }
  
  // Footer
  doc.setFillColor(0, 150, 136);
  doc.rect(0, 280, 220, 20, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(10);
  doc.text('BoardingClaims.com - Your Rights, Our Priority', 105, 290, { align: 'center' });

  return doc;
};
