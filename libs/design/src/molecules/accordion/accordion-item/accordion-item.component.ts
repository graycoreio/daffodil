import { Component, Input, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { daffAccordionAnimations } from '../animation/accordion-animation';
import { getAnimationState } from '../animation/accordion-animation-state';

@Component({
  selector: 'daff-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    daffAccordionAnimations.openAccordion
  ]
})
export class DaffAccordionItemComponent implements OnInit {
  private faChevronDown = faChevronDown;
  private faChevronUp = faChevronUp;

  @HostBinding('class.daff-accordion-item') private class = true;

	@Input() initiallyActive: boolean;
	/**
	 * @docs-private
	 */
	_open = false;
	/**
	 * @docs-private
	 */
  _animationState: string;

	/**
	 * @docs-private
	 */
  ngOnInit() {
    this._open = this.initiallyActive ? this.initiallyActive : this._open;
    this._animationState = getAnimationState(this._open);
  }

  toggleActive() {
    this._open = !this._open;  
    this._animationState = getAnimationState(this._open);
  }
}
