import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Meal } from "../models/meal.model";



@Injectable()
export class MealService{
     meal:any;

     private mealListRef = this.db.list('meal');


    constructor(public db:AngularFireDatabase)
    {

    }

    

    getAllmeal()
    {
        return this.mealListRef;
    }
    addmeal(meal:Meal)
    {
        return this.mealListRef.push(meal);

    }

    editmeal(meal: Meal)
    {
        return this.mealListRef.update(meal.key,meal);

    }

    removemeal(meal: Meal)
    {
        return this.mealListRef.remove(meal.key);
    }


}