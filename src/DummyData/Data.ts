import { Invoice } from "../../lib/types/invoice";
import { InvoiceSchemaType } from "../../lib/zod-validations/invoice";

export const InvoicesData = [
  
    { customerName: "John Smith", Area: "New York", invoiceNumber: "INV-0001",status:"Unpaid",balance:"Rs. 123456.00" },
    { customerName: "Emily Johnson", Area: "London", invoiceNumber: "INV-0002",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Ahmed Hassan", Area: "Cairo", invoiceNumber: "INV-0003",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Maria Garcia", Area: "Madrid", invoiceNumber: "INV-0004",status:"Unpaid",balance:"Rs. 123456.00" },
    { customerName: "Luis Rodriguez", Area: "Mexico City", invoiceNumber: "INV-0005",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Yuki Tanaka", Area: "Tokyo", invoiceNumber: "INV-0006",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Sophie Dupont", Area: "Paris", invoiceNumber: "INV-0007",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Anna Müller", Area: "Berlin", invoiceNumber: "INV-0008",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Michael Brown", Area: "Sydney", invoiceNumber: "INV-0009",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Jane Doe", Area: "Toronto", invoiceNumber: "INV-0010" ,status:"Paid",balance:"Rs. 123456.00"},
    { customerName: "Emma White", Area: "Dubai", invoiceNumber: "INV-0011",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Oliver Wilson", Area: "Singapore", invoiceNumber: "INV-0012",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Admin", Area: "Admin", invoiceNumber: "INV-0013" ,status:"Paid",balance:"Rs. 123456.00"},
    { customerName: "Sophia Martinez", Area: "Moscow", invoiceNumber: "INV-0014",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Liam Miller", Area: "Rome", invoiceNumber: "INV-0015" ,status:"Unpaid",balance:"Rs. 123456.00"},
    { customerName: "Isabella Garcia", Area: "Barcelona", invoiceNumber: "INV-0016",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Mason Anderson", Area: "Amsterdam", invoiceNumber: "INV-0017",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Mia Thompson", Area: "Vienna", invoiceNumber: "INV-0018" ,status:"Paid",balance:"Rs. 123456.00"},
    { customerName: "Ethan Jackson", Area: "Stockholm", invoiceNumber: "INV-0019" ,status:"Paid",balance:"Rs. 123456.00"},
    { customerName: "Ava White", Area: "Helsinki", invoiceNumber: "INV-0020",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Ethan Lee", Area: "Oslo", invoiceNumber: "INV-0021",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Olivia Harris", Area: "Copenhagen", invoiceNumber: "INV-0022",status:"Unpaid",balance:"Rs. 123456.00" },
    { customerName: "William Clark", Area: "Lisbon", invoiceNumber: "INV-0023",status:"Paid",balance:"Rs. 123456.00" },
    { customerName: "Emily Taylor", Area: "Luxembourg City", invoiceNumber: "INV-0024",status:"Paid",balance:"Rs. 123456.00" },
]


export const ProductsData: InvoiceSchemaType['invoiceProducts'] = [
    { productName: 'Costio-D', productType: "Tab", productQuantity: 410, productPrice: 450, batchNumber: "BF123" ,remainingQuantity:122},
    { productName: 'Mativ', productType: "Cap", productQuantity: 40, productPrice: 60, batchNumber: "AB423" ,remainingQuantity:123},
    { productName: 'Cosflor', productType: "Tab", productQuantity: 530, productPrice: 600, batchNumber: "KL234" ,remainingQuantity:422},
    { productName: 'Inicos', productType: "Syp", productQuantity: 120, productPrice: 150, batchNumber: "IO595" ,remainingQuantity:45},
    { productName: 'Malgro', productType: "Cap", productQuantity: 20, productPrice: 60, batchNumber: "F12HN23" ,remainingQuantity:64},
    { productName: 'Caycal', productType: "Tab", productQuantity: 193, productPrice: 250, batchNumber: "RU433" ,remainingQuantity:12},
    { productName: 'Sunrise', productType: "Syp", productQuantity: 234, productPrice: 300, batchNumber: "90WER" ,remainingQuantity:44},
    { productName: 'Refix', productType: "Tab", productQuantity: 43, productPrice: 70, batchNumber: "23FWE" ,remainingQuantity:53},
    { productName: 'Regix', productType: "Syp", productQuantity: 50, productPrice: 100, batchNumber: "FS323",remainingQuantity:643 },
    { productName: 'Loratadine', productType: "Tab", productQuantity: 410, productPrice: 450, batchNumber: "BF123" ,remainingQuantity:55},
    { productName: 'Ibuprofen', productType: "Cap", productQuantity: 40, productPrice: 60, batchNumber: "AB423" ,remainingQuantity:33},
    { productName: 'Omeprazole', productType: "Tab", productQuantity: 530, productPrice: 600, batchNumber: "KL234" ,remainingQuantity:22},
    { productName: 'Paracetamol', productType: "Syp", productQuantity: 120, productPrice: 150, batchNumber: "IO595" ,remainingQuantity:2},
    { productName: 'Amoxicillin', productType: "Cap", productQuantity: 20, productPrice: 60, batchNumber: "F12HN23" ,remainingQuantity:12},
    { productName: 'Aspirin', productType: "Tab", productQuantity: 193, productPrice: 250, batchNumber: "RU433",remainingQuantity:44 },
    { productName: 'Simvastatin', productType: "Syp", productQuantity: 234, productPrice: 300, batchNumber: "90WER" ,remainingQuantity:345},
    { productName: 'Metformin', productType: "Tab", productQuantity: 43, productPrice: 70, batchNumber: "23FWE" ,remainingQuantity:234},
    { productName: 'Hydrochlorothiazide', productType: "Syp", productQuantity: 50, productPrice: 100, batchNumber: "FS323",remainingQuantity:345 },
    { productName: 'Atorvastatin-D', productType: "Tab", productQuantity: 410, productPrice: 450, batchNumber: "BF123",remainingQuantity:12 },
    { productName: 'Gabapentin', productType: "Cap", productQuantity: 40, productPrice: 60, batchNumber: "AB423" ,remainingQuantity:1},
    { productName: 'Warfarin', productType: "Tab", productQuantity: 530, productPrice: 600, batchNumber: "KL234",remainingQuantity:4 },
    { productName: 'Citalopram', productType: "Syp", productQuantity: 120, productPrice: 150, batchNumber: "IO595" ,remainingQuantity:34},
    { productName: 'Metoprolol', productType: "Cap", productQuantity: 20, productPrice: 60, batchNumber: "F12HN23" ,remainingQuantity:23},
    { productName: 'Amlodipine', productType: "Tab", productQuantity: 193, productPrice: 250, batchNumber: "RU433" ,remainingQuantity:123},
    { productName: 'Diazepam', productType: "Syp", productQuantity: 234, productPrice: 300, batchNumber: "90WER",remainingQuantity:53 },
    { productName: 'Ranitidine', productType: "Tab", productQuantity: 43, productPrice: 70, batchNumber: "23FWE" ,remainingQuantity:122},
    { productName: 'Clopidogrel', productType: "Syp", productQuantity: 50, productPrice: 100, batchNumber: "FS323" ,remainingQuantity:122},
    { productName: 'Levothyroxine', productType: "Tab", productQuantity: 410, productPrice: 450, batchNumber: "BF123" ,remainingQuantity:122},
    { productName: 'Montelukast', productType: "Cap", productQuantity: 40, productPrice: 60, batchNumber: "AB423",remainingQuantity:12 },
    { productName: 'Fluoxetine', productType: "Tab", productQuantity: 530, productPrice: 600, batchNumber: "KL234" ,remainingQuantity:44},
    { productName: 'Sildenafil', productType: "Syp", productQuantity: 120, productPrice: 150, batchNumber: "IO595",remainingQuantity:454 },
    { productName: 'Pregabalin', productType: "Cap", productQuantity: 20, productPrice: 60, batchNumber: "F12HN23",remainingQuantity:234 },
    { productName: 'Tadalafil', productType: "Tab", productQuantity: 193, productPrice: 250, batchNumber: "RU433",remainingQuantity:12 },
    { productName: 'Methotrexate', productType: "Syp", productQuantity: 234, productPrice: 300, batchNumber: "90WER",remainingQuantity:234 },
    { productName: 'Refix', productType: "Cap", productQuantity: 43, productPrice: 70, batchNumber: "23FWE" ,remainingQuantity:542},
    { productName: 'Regix', productType: "Tab", productQuantity: 50, productPrice: 100, batchNumber: "FS323",remainingQuantity:12 },
  ];
  
  export const CustomersData: InvoiceSchemaType['invoiceCustomer'][] = [
    { customerName: "John Smith", Area: "New York", Address: "United States" },
    { customerName: "Emily Johnson", Area: "London", Address: "United Kingdom" },
    { customerName: "Ahmed Hassan", Area: "Cairo", Address: "Egypt" },
    { customerName: "Maria Garcia", Area: "Madrid", Address: "Spain" },
    { customerName: "Luis Rodriguez", Area: "Mexico City", Address: "Mexico" },
    { customerName: "Yuki Tanaka", Area: "Tokyo", Address: "Japan" },
    { customerName: "Sophie Dupont", Area: "Paris", Address: "France" },
    { customerName: "Anna Müller", Area: "Berlin", Address: "Germany" },
    { customerName: "Michael Brown", Area: "Sydney", Address: "Australia" },
    { customerName: "Jane Doe", Area: "Toronto", Address: "Canada" },
    { customerName: "Emma White", Area: "Dubai", Address: "United Arab Emirates" },
    { customerName: "Oliver Wilson", Area: "Singapore", Address: "Singapore" },
    { customerName: "Admin", Area: "Admin", Address: "Admin" },
    { customerName: "Sophia Martinez", Area: "Moscow", Address: "Russia" },
    { customerName: "Liam Miller", Area: "Rome", Address: "Italy" },
    { customerName: "Isabella Garcia", Area: "Barcelona", Address: "Spain" },
    { customerName: "Mason Anderson", Area: "Amsterdam", Address: "Netherlands" },
    { customerName: "Mia Thompson", Area: "Vienna", Address: "Austria" },
    { customerName: "Ethan Jackson", Area: "Stockholm", Address: "Sweden" },
    { customerName: "Ava White", Area: "Helsinki", Address: "Finland" },
    { customerName: "Ethan Lee", Area: "Oslo", Address: "Norway" },
    { customerName: "Olivia Harris", Area: "Copenhagen", Address: "Denmark" },
    { customerName: "William Clark", Area: "Lisbon", Address: "Portugal" },
    { customerName: "Emily Taylor", Area: "Luxembourg City", Address: "Luxembourg" },
  ];
  
  export const customerSalesData = {
    Jerry: 123,
    Doe: 521,
    White: 433,
    Peter: 789,
    Emilia: 537,
    
};
export const productSalesData = {
    Cosflor: 323,
    Regix: 421,
    Costio: 133,
    Refix: 589,
    Mativ: 437,
};
export const sliceColors = ['#fbd203', '#7F27FF', '#2ecc71', '#ff3c00', '#468EFB','#d3d3d3']