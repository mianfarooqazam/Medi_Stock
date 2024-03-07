export type Invoice = {
    invoiceNumber: string
    invoiceDate: string
    invoiceCustomer: string
    invoiceProducts: InvoiceProduct[]
    invoiceTotal: number
    invoiceDiscount: number
    invoiceBalanceDue: number
    invoiceSignatured?: boolean
    invoicePaid?: boolean
}

export type InvoiceProduct = {
    productName: string
    productQuantity: number
    productPrice: number
}