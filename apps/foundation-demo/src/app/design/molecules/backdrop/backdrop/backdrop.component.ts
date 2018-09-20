import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

import { daffBackdropAnimations } from '../animation/backdrop-animation';
import { getAnimationState } from '../animation/backdrop-animation-state';

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  animations: [
    daffBackdropAnimations.fadeBackdrop
  ]
})
export class BackdropComponent implements OnChanges{

  _animationState: string;

  constructor() { }

  ngOnChanges() {
    this._animationState = getAnimationState(this.show);
  }
  
  @Input() show: boolean;
  @Input() backdropIsVisible: boolean = true;
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  onBackdropClicked() : void {
    this.backdropClicked.emit();
  }
}
