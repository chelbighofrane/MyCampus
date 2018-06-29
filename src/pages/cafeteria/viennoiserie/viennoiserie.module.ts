import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViennoiseriePage } from './viennoiserie';

@NgModule({
  declarations: [
    ViennoiseriePage,
  ],
  imports: [
    IonicPageModule.forChild(ViennoiseriePage),
  ],
})
export class ViennoiseriePageModule {}
