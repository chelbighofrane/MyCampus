import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopCommentPage } from './pop-comment';

@NgModule({
  declarations: [
    PopCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(PopCommentPage),
  ],
})
export class PopCommentPageModule {}
