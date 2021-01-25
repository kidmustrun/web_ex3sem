export interface Product {
    code: number;
    title: string;
    price: number;
    creator?: string;
    type: number;
    weight: number;
    quantity: string;
  }
  
  export enum ProductType {
    furniture,
    tech,
    book,
    phone
  }