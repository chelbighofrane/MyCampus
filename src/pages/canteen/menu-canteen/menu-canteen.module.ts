import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuCanteenPage } from './menu-canteen';

@NgModule({
  declarations: [
    MenuCanteenPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuCanteenPage),
  ],
})
export class MenuCanteenPageModule {}
