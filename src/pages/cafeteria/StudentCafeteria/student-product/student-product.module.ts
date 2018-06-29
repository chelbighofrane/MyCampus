import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentProductPage } from './student-product';

@NgModule({
  declarations: [
    StudentProductPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentProductPage),
  ],
})
export class StudentProductPageModule {}
