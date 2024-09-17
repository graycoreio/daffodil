import { AnimationEvent } from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  HostBinding,
  OnInit,
} from '@angular/core';

import { daffSidebarViewportBackdropAnimations } from './animation/backdrop-animation';
import { getAnimationState } from './animation/backdrop-animation-state';

@Component({
  selector: 'daff-sidebar-viewport-backdrop',
  template: '<ng-content></ng-content>',
  styleUrls: ['./sidebar-viewport-backdrop.component.scss'],
  animations: [
    daffSidebarViewportBackdropAnimations.fadeBackdrop,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffSidebarViewportBackdropComponent implements OnInit {

  @HostBinding('class.interactable') interactableClass = true;

  /**
   * Determines whether or not the backdrop is transparent.
   */
  @Input() @HostBinding('class.transparent') transparent = false;

  /**
   * Determines whether or not the backdrop is interactable.
   */
  @Input() interactable = true;

  /**
   * Boolean property that determines whether or not the
   * backdrop should fill up its containing window.
   */
  @Input() @HostBinding('class.fullscreen') fullscreen = false;

  /**
   * Output event triggered when the backdrop is clicked.
   */
  @Output() backdropClicked: EventEmitter<void> = new EventEmitter<void>();

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

  @HostListener('click')
  onBackdropClicked(): void {
    this.backdropClicked.emit();
  }
}
