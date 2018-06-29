import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NosSupplementsPage } from './nos-supplements';

@NgModule({
  declarations: [
    NosSupplementsPage,
  ],
  imports: [
    IonicPageModule.forChild(NosSupplementsPage),
  ],
})
export class NosSupplementsPageModule {}
