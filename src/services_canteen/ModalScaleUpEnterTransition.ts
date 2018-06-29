import { Animation, PageTransition } from 'ionic-angular';

export class ModalScaleUpEnterTransition extends PageTransition {

public init() {
    const ele = this.enteringView.pageRef().nativeElement;
    const wrapper = new Animation(this.plt, ele.querySelector('.modal-wrapper'));

    wrapper.beforeStyles({ 'transform': 'scale(1)', 'opacity': 1 });
    wrapper.fromTo('transform', 'scale(0)', 'scale(5.0)');
    wrapper.fromTo('opacity', 1, 1);

    this
        .element(this.enteringView.pageRef())
        .duration(100)
        .easing('cubic-bezier(.1, .7, .1, 1)')
        .add(wrapper);
}
}