/* eslint-disable quote-props */
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
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectorRef,
  OnDestroy,
  signal,
} from '@angular/core';
import { Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

import {
  DaffOpenable,
  DaffOpenableDirective,
  DaffFocusStackService,
  daffFocusableElementsSelector,
} from '@daffodil/design';

import { DaffModalService } from '../service/modal.service';

@Component({
  selector: 'daff-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  hostDirectives: [{
    directive: DaffOpenableDirective,
    outputs: ['toggled'],
  }],
  host: {
    'class': 'daff-modal',
    'role': 'dialog',
    'aria-modal': 'true',
    '[attr.aria-labelledby]': 'ariaLabelledBy',
    '(keydown.escape)': 'onEscape()',
    '[animate.enter]': '"opening"',
    '[class.closing]': 'closing()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    PortalModule,
    OverlayModule,
  ],
})
export class DaffModalComponent implements AfterContentInit, AfterViewInit, OnDestroy, DaffOpenable {
  private closing = signal(false);

  private _ariaLabelledBy = null;

  /**
   * @docs-private
   *
   * By default, the `aria-labelledby` of the modal is set to the `id` of the modal title.
   */
  get ariaLabelledBy() {
    return this._ariaLabelledBy;
  } set ariaLabelledBy(value: string) {
    this._ariaLabelledBy = value;
  }

  /**
   * @docs-private
   *
   * The CDK Portal outlet used to portal content into the modal.
   */
  @ViewChild(CdkPortalOutlet, { static: true }) private _portalOutlet: CdkPortalOutlet;

  /**
   * Private subject for closed animation completion events.
   */
  private _closedAnimationCompleted = new Subject<boolean>();

  /**
   * Observable that emits when the close animation is completed.
   */
  readonly closedAnimationCompleted$ = this._closedAnimationCompleted.asObservable().pipe(delay(300));

  /**
   * @docs-private
   */
  onEscape() {
    this.modalService.close(this);
  }

  private _focusTrap: ConfigurableFocusTrap;

  constructor(
    private modalService: DaffModalService,
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private elementRef: ElementRef<HTMLElement>,
    private openDirective: DaffOpenableDirective,
    private _focusStack: DaffFocusStackService,
    private changeDetector: ChangeDetectorRef,
  ) {
    this.openDirective.stateless = false;
  }

  /**
   * @docs-private
   */
  ngAfterContentInit() {
    this._focusTrap = this._focusTrapFactory.create(
      this.elementRef.nativeElement,
    );
    this._focusStack.push();
  }

  /**
   * @docs-private
   */
  ngAfterViewInit() {
    const focusableChild = (<HTMLElement>this.elementRef.nativeElement.querySelector(
      daffFocusableElementsSelector)
    );

    if (focusableChild) {
      focusableChild.focus();
    } else {
      // There's a timing condition when computing HostBindings afterContentInit
      // so to allow the modal to be focused, we manually set the tabindex.
      this.elementRef.nativeElement.tabIndex = 0;
      (<HTMLElement>this.elementRef.nativeElement).focus();
    }
  }

  /**
   * @docs-private
   *
   * Helper method to attach portable content to modal.
   */
  attachContent(portal: ComponentPortal<any>): any {
    const attachContent = this._portalOutlet.attachComponentPortal(portal);

    return attachContent;
  }

  /**
   * Tracks the open state of the modal.
   */
  get open() {
    return this.openDirective.open;
  }

  /**
   * @docs-private
   *
   * Reveals the modal.
   */
  reveal() {
    this.openDirective.reveal();
    this.changeDetector.markForCheck();
  }

  /**
   * @docs-private
   *
   * Hides the modal.
   */
  hide() {
    this.openDirective.hide();
    this.closing.set(true);
    this._closedAnimationCompleted.next(true);
    this._focusTrap?.destroy();
    this._focusStack.pop();

    this.changeDetector.markForCheck();
  }

  /**
   * @docs-private
   *
   * Toggles the visibility of the modal.
   */
  toggle() {
    this.openDirective.toggle();
    this.changeDetector.markForCheck();
  }

  /**
   * @docs-private
   */
  ngOnDestroy() {
    this._closedAnimationCompleted.complete();
  }
}
