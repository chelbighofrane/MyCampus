import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NosPizzasPage } from './nos-pizzas';

@NgModule({
  declarations: [
    NosPizzasPage,
  ],
  imports: [
    IonicPageModule.forChild(NosPizzasPage),
  ],
})
export class NosPizzasPageModule {}
