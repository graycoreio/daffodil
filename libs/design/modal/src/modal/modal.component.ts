import { AnimationEvent } from '@angular/animations';
import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  CdkPortalOutlet,
  ComponentPortal,
  PortalModule,
} from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  HostBinding,
  ChangeDetectionStrategy,
  ViewChild,
  HostListener,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';

import {
  DaffOpenable,
  DaffOpenableDirective,
} from '@daffodil/design';
import { daffFocusableElementsSelector } from '@daffodil/design';

import { daffFadeAnimations } from '../animations/modal-animation';
import { getAnimationState } from '../animations/modal-animation-state';
import { DaffModalService } from '../service/modal.service';

@Component({
  selector: 'daff-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  hostDirectives: [{
    directive: DaffOpenableDirective,
    outputs: ['toggled'],
  }],
  animations: [daffFadeAnimations.fade],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    PortalModule,
    OverlayModule,
  ],
})
export class DaffModalComponent implements AfterContentInit, AfterViewInit, DaffOpenable {
  /**
   * Sets a class of .daff-modal to the host element.
   */
  @HostBinding('class.daff-modal') modalClass = true;

  /**
   * Sets the role to dialog.
   */
  @HostBinding('attr.role') role = 'dialog';

  /**
   * Sets aria-modal to true.
   */
  @HostBinding('attr.aria-modal') ariaModal = true;

  private _ariaLabelledBy = null;

  /**
   * The aria-labelledby for the modal. This is set by the id of
   * {@link DaffModalTitleDirective} when it is used.
   *
   */
  @HostBinding('attr.aria-labelledby') get ariaLabelledBy() {
    return this._ariaLabelledBy;
  } set ariaLabelledBy(value: string) {
    this._ariaLabelledBy = value;
  }

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
   * @docs-private
   */
  @HostListener('keydown.escape')
  onEscape() {
    this.modalService.close(this);
  }

  private _focusTrap: ConfigurableFocusTrap;

  constructor(
    private modalService: DaffModalService,
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private elementRef: ElementRef<HTMLElement>,
    private openDirective: DaffOpenableDirective,
  ) {
    this.openDirective.stateless = false;
  }

  ngAfterContentInit() {
    this._focusTrap = this._focusTrapFactory.create(
      this.elementRef.nativeElement,
    );
  }

  ngAfterViewInit() {
    const focusableChild = (<HTMLElement>this.elementRef.nativeElement.querySelector(
      daffFocusableElementsSelector)
    );

    if (focusableChild) {
      focusableChild.focus();
    } else {
      // There's a timing condition when computing HostBindings afterContentInit
      // so to allow the menu to be focused, we manually set the tabindex.
      this.elementRef.nativeElement.tabIndex = 0;
      (<HTMLElement>this.elementRef.nativeElement).focus();
    }
  }

  /**
   * Helper method to attach portable content to modal.
   */
  attachContent(portal: ComponentPortal<any>): any {
    const attachContent = this._portalOutlet.attachComponentPortal(portal);

    // When a component is created to inject content into the modal, it can
    // interfere with the display styles applied to the modal's header, content,
    // and action sections. By setting `display: contents;` on the custom
    // component, it is visually removed from the UI, allowing the content
    // within it to inherit the modal's styles.
    attachContent.location.nativeElement.style.display = 'contents';

    return attachContent;
  }

  /** Animation hook that controls the entrance and exit animations of the modal. */
  @HostBinding('@fade') get fadeState(): string {
    return getAnimationState(this.openDirective.open);
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

  get open() {
    return this.openDirective.open;
  }

  /**
   * Reveals the modal
   */
  reveal() {
    this.openDirective.reveal();
  }

  /**
   * Hides the modal
   */
  hide() {
    this.openDirective.hide();
  }

  /**
   * Toggles the visibility of the modal
   */
  toggle() {
    this.openDirective.toggle();
  }
}
