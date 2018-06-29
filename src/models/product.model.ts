import { Feedback } from './feedback.model';
import { Sale } from './sale.model';


export class Product {
    
    key?: string;
    creatorID: string;
    category: string;
    type:string;
    name: string;
    price: number;
    onSale: boolean;
    description: string;
    photo: string;
    sales: Sale;
    feedbacks: Feedback[];
    moyennefeed?: number;

}