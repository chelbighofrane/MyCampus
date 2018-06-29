import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestmodalPage, ModalContentPage } from './testmodal';

@NgModule({
  declarations: [
    TestmodalPage,
    ModalContentPage
  ],
  imports: [
    IonicPageModule.forChild(TestmodalPage),
  ]
})
export class TestmodalPageModule {}
