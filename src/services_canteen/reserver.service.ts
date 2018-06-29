import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Reservation } from "../models/reservation.model";

@Injectable()
export class ReserverService{

    reserve:any;

     private reserveListRef = this.db.list('reservation');


    constructor(public db:AngularFireDatabase)
    {

    }

    

    getAllreservation()
    {
        return this.reserveListRef;
    }

    addreservation(reserve:Reservation)
    {
        return this.reserveListRef.push(reserve);

    }

    editreservation(reserve:Reservation)
    {
        return this.reserveListRef.update(reserve.key,reserve);

    }

    removereservation(reserve:Reservation)
    {
        return this.reserveListRef.remove(reserve.key);
    }
}