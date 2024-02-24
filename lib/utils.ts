export function generateInvoiceID() {
    const prefix = "INV";
    const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const invoiceID = `${prefix}-${randomNumber}`;
    return invoiceID;
  }