import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColdDrinksPage } from './cold-drinks';

@NgModule({
  declarations: [
    ColdDrinksPage,
  ],
  imports: [
    IonicPageModule.forChild(ColdDrinksPage),
  ],
})
export class ColdDrinksPageModule {}
