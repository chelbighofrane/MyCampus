import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalFeedbackPage } from './modal-feedback';

@NgModule({
  declarations: [
    ModalFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalFeedbackPage),
  ],
})
export class ModalFeedbackPageModule {}
