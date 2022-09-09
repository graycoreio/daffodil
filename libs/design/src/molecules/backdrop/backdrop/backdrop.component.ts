import { AnimationEvent } from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  HostBinding,
  ElementRef,
  OnInit,
} from '@angular/core';

import { daffBackdropAnimations } from '../animation/backdrop-animation';
import { getAnimationState } from '../animation/backdrop-animation-state';

@Component({
  selector: 'daff-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss'],
  animations: [
    daffBackdropAnimations.fadeBackdrop,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffBackdropComponent implements OnInit {

  /**
   * Determines whether or not the backdrop is transparent.
   */
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  @Input() transparent: boolean = false;

  /**
   * Determines whether or not the backdrop is interactable.
   */
  @Input() interactable = true;

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

  @HostBinding('class.interactable') interactableClass = true;

  ngOnInit(): void {
    this.interactableClass = this.interactable;
  }

  /**
   * Animation hook for that controls the backdrops
   * entrance and fade animations.
   */
  @HostBinding('@fadeBackdrop') get fadeBackdropTrigger() {
    return getAnimationState(this.interactable);
  }

  @HostListener('@fadeBackdrop.done', ['$event'])
  animationDone(e: AnimationEvent) {
	  this.interactableClass = !(e.toState === ':leave' || e.toState === 'non-interactable');
  }

  @HostListener('@fadeBackdrop.start', ['$event'])
  animationStart(e: AnimationEvent) {
	  if(e.toState === ':enter' || e.toState === 'interactable'){
	    this.interactableClass = true;
	  }
  }

  /**
   * @deprecated
   * Backdrop event that triggers when the backdrop element is clicked.
   */
  @HostListener('click')
  onBackdropClicked(): void {
	  this.backdropClicked.emit();
  }
}
