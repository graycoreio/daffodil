import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  HostBinding,
} from '@angular/core';

import { daffBackdropAnimations } from '../animation/backdrop-animation';

@Component({
  selector: 'daff-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  animations: [
    daffBackdropAnimations.fadeBackdrop,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffBackdropComponent {

  /**
   * Determines whether or not the backdrop is transparent.
   */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() transparent: boolean = false;

  /**
   * Boolean property that determines whether or not the
   * backdrop should fill up its containing window.
   */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() fullscreen: boolean = false;

  /**
   * Output event triggered when the backdrop is clicked.
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Animation hook for that controls the backdrops
   * entrance and fade animations.
   */
  @HostBinding('@fadeBackdrop')

  /**
   * @deprecated
   * Backdrop event that triggers when the backdrop element is clicked.
   */
  @HostListener('click')
  onBackdropClicked(): void {
    this.backdropClicked.emit();
  }
}
