import { Component, Output, EventEmitter, Input, ChangeDetectionStrategy, HostListener, HostBinding } from '@angular/core';

import { daffBackdropAnimations } from '../animation/backdrop-animation';

@Component({
  selector: 'daff-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  animations: [
    daffBackdropAnimations.fadeBackdrop
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffBackdropComponent {

  /**
   * @docs
   * Determines whether or not the backdrop is transparent.
   */
  @Input() transparent = false;

  /**
   * @docs
   * Output event triggered when the backdrop is clicked.
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * @docs
   * Animation hook for that controls the backdrops 
   * entrance and fade animations.
   */
  @HostBinding('@fadeBackdrop')

  /**
   * @docs
   * @deprecated
   * Backdrop event that triggers when the backdrop element is clicked.
   */
  @HostListener('click')
  onBackdropClicked() : void {
    this.backdropClicked.emit();
  }
}
