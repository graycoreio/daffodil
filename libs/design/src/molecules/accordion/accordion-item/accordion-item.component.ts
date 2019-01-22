import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { daffAccordionAnimations } from '../animation/accordion-animation';
import { getAnimationState } from '../animation/accordion-animation-state';

@Component({
  selector: 'daff-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  host: {
    'class': 'daff-accordion-item'
  },
  encapsulation: ViewEncapsulation.None,
  animations: [
    daffAccordionAnimations.openAccordion
  ]
})
export class DaffAccordionItemComponent implements OnInit {
  @Input() initiallyActive: boolean;
  _open = false;
  _animationState: string;
  
  ngOnInit() {
    this._open = this.initiallyActive ? this.initiallyActive : this._open;
    this._animationState = getAnimationState(this._open);
  }

  toggleActive() {
    this._open = !this._open;  
    this._animationState = getAnimationState(this._open);
  }
}
