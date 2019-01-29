import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { daffBackdropAnimations } from '../animation/backdrop-animation';
import { getAnimationState } from '../animation/backdrop-animation-state';

@Component({
  selector: 'daff-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  animations: [
    daffBackdropAnimations.fadeBackdrop
  ]
})
export class DaffBackdropComponent implements OnChanges{

  _animationState: string;
  @Input() show: boolean;
  @Input() backdropIsVisible = true;
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnChanges() {
    this._animationState = getAnimationState(this.show);
  }

  onBackdropClicked() : void {
    this.backdropClicked.emit();
  }
}
