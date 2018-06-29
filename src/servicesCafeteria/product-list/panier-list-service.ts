import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Panier } from '../../models/panier.model';


@Injectable()
export class PanierListService{
    private panierListRef= this.db.list<Panier> ('panier');
    
    constructor(private db : AngularFireDatabase){
    }

    getPanierList(){
        return this.panierListRef;
    }
    
    addItem(p:Panier){
        return this.panierListRef.push(p);
    }

    editItem(p:Panier){
        this.panierListRef.update(p.key,p);
    }

    remove(p:Panier){
        return this.panierListRef.remove(p.key);
    }
}