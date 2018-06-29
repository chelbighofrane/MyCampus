import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupCommentPage } from './popup-comment';

@NgModule({
  declarations: [
    PopupCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupCommentPage),
  ],
})
export class PopupCommentPageModule {}
