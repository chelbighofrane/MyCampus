import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Order } from '../../models/order.model';


@Injectable()
export class OrderListService{
    private orderListRef= this.db.list<Order> ('order');
    
    constructor(private db : AngularFireDatabase){
    }

    getOrderList(){
        return this.orderListRef;
    }
    
    addItem(p: Order){
        return this.orderListRef.push(p);
    }

    editItem(p:Order){
        this.orderListRef.update(p.key,p);
    }

    remove(p:Order){
        return this.orderListRef.remove(p.key);
    }
}