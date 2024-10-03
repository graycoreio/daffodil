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

import {
  DaffOpenable,
  DaffOpenableDirective,
} from '@daffodil/design';

import { daffAccordionAnimations } from '../animation/accordion-animation';
import { getAnimationState } from '../animation/accordion-animation-state';

let daffAccordionItemId = 0;

@Component({
  selector: 'daff-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  hostDirectives: [{
    directive: DaffOpenableDirective,
    inputs: ['open'],
    outputs: ['toggled'],
  }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffAccordionAnimations.openAccordion,
  ],
  standalone: true,
})
export class DaffAccordionItemComponent implements OnInit, DaffOpenable {
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

  _daffAccordionItemId = 'daff-accordion-item' + '-' + ++daffAccordionItemId;

  @Input() id: string = this._daffAccordionItemId;

  /** Whether or not the item is initiallyExpanded by default. */
  @Input() initiallyExpanded = false;

  /**
   * @docs-private
   */
  _animationState: string;

  constructor(private openDirective: DaffOpenableDirective) {
    this.openDirective.stateless = false;
  }

  /**
   * @docs-private
   */
  ngOnInit() {
    this.openDirective.open = this.initiallyExpanded ? this.initiallyExpanded : this.openDirective.open;
    this._animationState = getAnimationState(this.openDirective.open);
  }

  get open() {
    return this.openDirective.open;
  }

  /**
   * Reveals the contents of the accordion item
   */
  reveal() {
    this.openDirective.reveal();
  }

  /**
   * Hides the contents of the accordion item
   */
  hide() {
    this.openDirective.hide();
  }

  /**
   * Toggles the visibility of the contents of the accordion item
   */
  toggle() {
    this.openDirective.toggle();
    this._animationState = getAnimationState(this.openDirective.open);
  }
}
