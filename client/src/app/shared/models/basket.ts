import { v4 as uuidv4 } from 'uuid';

export interface Item {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export interface Basket {
    id: string;
    items: Item[];
}

export class Basket implements Basket{
    //guid
    id = uuidv4();
    items: Item[] = [];
}

export interface BasketTotals{
    shipping: number;
    subtotal: number;
    total: number;
}

