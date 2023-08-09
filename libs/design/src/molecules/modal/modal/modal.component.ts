import { AnimationEvent } from '@angular/animations';
import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y';
import {
  CdkPortalOutlet,
  ComponentPortal,
} from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
  ViewChild,
  HostListener,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';

import { daffFocusableElementsSelector } from '../../../core/focus/public_api';
import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';

@Component({
  selector: 'daff-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [daffFadeAnimations.fade],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffModalComponent implements AfterContentInit, AfterViewInit {
  /**
   * HostBinding to set the default modal class on the host element.
   */
  @HostBinding('class.daff-modal') modalClass = true;

  /**
   * Dictates whether or not a modal is open or closed.
   */
  @Input() open = false;

  /**
   * The CDK Portal outlet used to portal content into the modal.
   */
  @ViewChild(CdkPortalOutlet, { static: true }) private _portalOutlet: CdkPortalOutlet;

  /**
   * Event fired when the close animation is completed.
   */
  animationCompleted: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Event fired when the close animation is completed.
   */
  closedAnimationCompleted: EventEmitter<any> = new EventEmitter<
  any
  >();

  /**
   * Event fired when the backdrop is clicked. This is often used to close the modal.
   */
  hide: EventEmitter<void> = new EventEmitter<void>();

  private _focusTrap: ConfigurableFocusTrap;

  constructor(
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _elementRef: ElementRef<HTMLElement>,
  ) {
  }

  ngAfterContentInit() {
    this._focusTrap = this._focusTrapFactory.create(
	    this._elementRef.nativeElement,
	  );
  }

  ngAfterViewInit() {
    const focusableChild = (<HTMLElement>this._elementRef.nativeElement.querySelector(
      daffFocusableElementsSelector)
    );

    if(focusableChild) {
      focusableChild.focus();
    } else {
      // There's a timing condition when computing HostBindings afterContentInit
      // so to allow the menu to be focused, we manually set the tabindex.
      this._elementRef.nativeElement.tabIndex = 0;
      (<HTMLElement>this._elementRef.nativeElement).focus();
    }
  }

  /**
   * Helper method to attach portable content to modal.
   */
  attachContent(portal: ComponentPortal<any>): any {
	  this._portalOutlet.attachComponentPortal(portal);
  }

  /** Animation hook that controls the entrance and exit animations of the modal. */
  @HostBinding('@fade') get fadeState(): string {
	  return getAnimationState(this.open);
  }

  /**
   * Animation event that can used to hook into when
   * animations are fully completed. We use this in the DaffModalService
   * to determine when to actually remove the dynamically rendered element from the DOM
   * so that the animation does not clip as the element is removed.
   */
  @HostListener('@fade.done', ['$event'])
  animationDone(e: AnimationEvent) {
	  this.animationCompleted.emit(e);
	  if (e.toState === 'closed') {
	    this.closedAnimationCompleted.emit(e);
	  }
  }
}
