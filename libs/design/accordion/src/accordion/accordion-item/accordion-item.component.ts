import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { daffAccordionAnimations } from '../animation/accordion-animation';
import { getAnimationState } from '../animation/accordion-animation-state';

let daffAccordionItemId = 0;

@Component({
  selector: 'daff-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffAccordionAnimations.openAccordion,
  ],
  standalone: true,
})
export class DaffAccordionItemComponent implements OnInit {
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
  @HostBinding('class.daff-accordion-item') class = true;

  @HostBinding('class.open') get openClass() {
    return this._open;
  }

  _daffAccordionItemId = 'daff-accordion-item' + '-' + ++daffAccordionItemId;

  @Input() id: string = this._daffAccordionItemId;

  /** Whether or not the item is initiallyExpanded by default. */
  @Input() initiallyExpanded = false;

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
    this._open = this.initiallyExpanded ? this.initiallyExpanded : this._open;
    this._animationState = getAnimationState(this._open);
  }

  toggleActive() {
    this._open = !this._open;
    this._animationState = getAnimationState(this._open);
  }
}
