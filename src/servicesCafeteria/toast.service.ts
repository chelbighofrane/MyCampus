import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular";



@Injectable()
export class ToastService{
    constructor(private toastcntr : ToastController)
    {

    }

    show(message:string, duration : number=3000)
    {
        return this.toastcntr.create({
                message,
                duration,

        })
        .present();
    }
}