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

@Component({
  selector: 'daff-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffAccordionAnimations.openAccordion,
  ],
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
