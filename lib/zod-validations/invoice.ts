import { z } from "zod";
import { generateInvoiceID } from "../utils";

export const InvoiceProduct = z.object({
  productName: z.string(),
  productType: z.enum(["Cap", "Syp", "Tab"]),
  productQuantity: z.number(),
  productPrice: z.number(),
  productTotal: z.number().default(0),
  batchNumber: z.string(),
  remainingQuantity: z.number(),
})

export type InvoiceProductType = z.infer<typeof InvoiceProduct>

export const InvoiceSchema = z.object({
  invoiceNumber: z
    .string(),
  invoiceDate: z.date(),
  invoiceCustomer: z.object({
    customerName: z.string(),
    Area: z.string(),
    Address: z.string(),
  }),
  invoiceProducts: z.array(InvoiceProduct),
  invoiceTotal: z.number().default(0),
  invoiceDiscountType: z.enum(["flat", "percentage"]).default('flat'),
  invoiceDiscount: z.number().default(0),
  // invoiceBalanceDue: z.number(),
  invoiceSignatured: z.boolean().default(false).optional(),
  invoicePaid: z.boolean().default(false).optional(),
});

export type InvoiceSchemaType = z.infer<typeof InvoiceSchema>;

