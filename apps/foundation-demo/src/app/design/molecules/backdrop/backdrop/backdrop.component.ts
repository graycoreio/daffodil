import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

import { daffSidebarAnimations } from '../animation/sidebar-animation';
import { getAnimationState } from '../animation/sidebar-animation-state';

@Component({
  selector: 'backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    daffSidebarAnimations.fadeBackdrop
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
