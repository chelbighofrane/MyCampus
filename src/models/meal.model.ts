import { Feedback } from './feedback.model';


export class Meal {

    key?: string;
    date: string;

    starterRepat?: string;
    mainCourseRepat?: string;
    dessertRepat?: string;
    quantityRepat?: number;
    photoGalleryRepat?: number[];

    starterDinner?: string;
    mainCourseDinner?: string;
    dessertDinner?: string;
    quantityDinner?: number;
    photoGalleryDinner?: number[];

    feedbacks?: Feedback[];
    moyennefeed : number;

}