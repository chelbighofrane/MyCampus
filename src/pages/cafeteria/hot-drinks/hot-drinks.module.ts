import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotDrinksPage } from './hot-drinks';

@NgModule({
  declarations: [
    HotDrinksPage,
  ],
  imports: [
    IonicPageModule.forChild(HotDrinksPage),
  ],
})
export class HotDrinksPageModule {}
