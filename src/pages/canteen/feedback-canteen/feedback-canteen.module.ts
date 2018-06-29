import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedbackCanteenPage } from './feedback-canteen';
import { Config } from 'ionic-angular';
import { ModalScaleUpLeaveTransition } from '../../../services_canteen/scale-up-leave.transition';
import { ModalScaleUpEnterTransition } from '../../../services_canteen/ModalScaleUpEnterTransition';

@NgModule({
  declarations: [
    FeedbackCanteenPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedbackCanteenPage),
  ],
})
export class FeedbackCanteenPageModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
}

private setCustomTransitions() {
    this.config.setTransition('modal-scale-up-leave', ModalScaleUpLeaveTransition);
    this.config.setTransition('modal-scale-up-enter', ModalScaleUpEnterTransition);
}
}
