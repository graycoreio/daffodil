import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y';
import {
  Component,
  ElementRef,
  Renderer2,
  HostBinding,
  ContentChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  AfterViewInit,
  AfterContentInit,
  HostListener,
  Input,
  OnDestroy,
} from '@angular/core';

import {
  DaffArticleEncapsulatedDirective,
  DaffFocusStackService,
  DaffPrefixable,
  DaffPrefixDirective,
  DaffStatusable,
  daffStatusMixin,
} from '@daffodil/design';

import { DaffToast } from '../interfaces/toast';
import { daffToastChangesFocus } from '../service/changes-focus';
import { DaffToastActionsDirective } from '../toast-actions/toast-actions.directive';

/**
 * An _elementRef is needed for the core mixins
 */
class DaffToastBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffToastBase = daffStatusMixin(DaffToastBase);

/**
 * DaffToastComponent provides a way to display and
 * communicate information for user actions or system updates.
 */
@Component({
  selector: 'daff-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  // todo(damienwebdev): remove once decorators hit stage 3 - https://github.com/microsoft/TypeScript/issues/7342
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['status'],
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffToastComponent
  extends _daffToastBase
  implements DaffPrefixable, DaffStatusable, AfterContentInit, AfterViewInit, OnDestroy {
  /** @docs-private */
  @HostBinding('class.daff-toast') class = true;

  /** @docs-private */
  @HostBinding('attr.role') role = 'status';

  @ContentChild(DaffToastActionsDirective)
    _actions: DaffToastActionsDirective;

  @ContentChild(DaffPrefixDirective)
    _prefix: DaffPrefixDirective;

  @Input() toast: DaffToast;

  /**
   * @docs-private
   */
  @HostListener('keydown.escape')
  onEscape() {
    this.toast.dismiss();
  }

  private _focusTrap: ConfigurableFocusTrap;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _focusStack: DaffFocusStackService,
  ) {
	  super(elementRef, renderer);
  }

  ngAfterContentInit() {
    if(daffToastChangesFocus(this.toast)) {
      this._focusTrap = this._focusTrapFactory.create(
        this._elementRef.nativeElement,
      );
    }
  }

  ngAfterViewInit() {
    if(daffToastChangesFocus(this.toast)) {
      this._focusStack.push();
      this._focusTrap.focusFirstTabbableElementWhenReady();
    }
  }

  ngOnDestroy() {
    if(daffToastChangesFocus(this.toast)) {
      this._focusTrap.destroy();
    }
  }
}
