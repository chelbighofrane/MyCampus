import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormDrinksPage } from './form-drinks';

@NgModule({
  declarations: [
    FormDrinksPage,
  ],
  imports: [
    IonicPageModule.forChild(FormDrinksPage),
  ],
})
export class FormDrinksPageModule {}
