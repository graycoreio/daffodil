import {
  Component,
  Input,
  OnInit,
  HostBinding,
  SkipSelf,
  Optional,
  ContentChildren,
  QueryList,
} from '@angular/core';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { DaffAccordionComponent } from '../accordion/accordion.component';
import { daffAccordionAnimations } from '../animation/accordion-animation';
import { getAnimationState } from '../animation/accordion-animation-state';

@Component({
  selector: 'daff-nav-accordion-item',
  templateUrl: './nav-accordion-item.component.html',
  styleUrls: ['./nav-accordion-item.component.scss'],
  animations: [
    daffAccordionAnimations.openAccordion,
  ],
})
export class DaffNavAccordionItemComponent implements OnInit {

  constructor(
		private accordion: DaffAccordionComponent,
		@SkipSelf() @Optional() private navAccordionItemParent: DaffNavAccordionItemComponent,
  ) {}
	/**
	 * @docs-private
	 */
	faChevronDown = faChevronDown;
	/**
	 * @docs-private
	 */
  faChevronUp = faChevronUp;

  /**
   * @docs-private
   */
	@HostBinding('class') get classes() {
    return [
      'daff-nav-accordion-item',
      'daff-nav-accordion-item--level-' + this._level,
    ];
  }

	@Input() initiallyActive: boolean;

	@ContentChildren(DaffNavAccordionItemComponent, { descendants: true })
	_navAccordionItemChild: QueryList<DaffNavAccordionItemComponent>;

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
	_level = 0;

	/**
	 * @docs-private
	 */
	ngOnInit() {
	  if(this.navAccordionItemParent && this.accordion === this.navAccordionItemParent.accordion) {
	    this._level = this.navAccordionItemParent._level + 1;
	  }
	  this._open = this.initiallyActive ? this.initiallyActive : this._open;
	  this._animationState = getAnimationState(this._open);
	}

	toggleActive() {
	  this._open = !this._open;
	  this._animationState = getAnimationState(this._open);
	}
}
