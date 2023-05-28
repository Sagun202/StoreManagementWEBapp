interface InvoiceProduct {
    productName: string;
    quantity: number;
    productTotalAmount: number;
  }
  
  export interface Invoice {
    invoiceId: number;
    invoiceTotalAmount: number;
    customerId: number;
    customerName: string;
    products: InvoiceProduct[];
  }