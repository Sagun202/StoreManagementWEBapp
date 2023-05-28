export interface SalesTransaction{
    id?: number,
    quantity: number,
    totalAmount: number,
    createdAt?: Date,
    custometId:number,
    customerName: string,
    productId:number,
    productName: string,
    productPrice: number,
    isInvoiceGenerated: boolean
}