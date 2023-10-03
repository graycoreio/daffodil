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
  ViewChild,
} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  daffArticleEncapsulatedMixin,
  DaffFocusStackService,
  DaffPrefixable,
  DaffPrefixDirective,
  DaffStatusable,
  daffStatusMixin,
} from '@daffodil/design';

import { daffToastChangesFocus } from '../service/changes-focus';
import { DaffToast } from '../toast';
import { DaffToastActionsDirective } from '../toast-actions/toast-actions.directive';

/**
 * An _elementRef is needed for the core mixins
 */
class DaffToastBase {
  constructor(public _elementRef: ElementRef, public _renderer: Renderer2) {}
}

const _daffToastBase = daffArticleEncapsulatedMixin(daffStatusMixin(DaffToastBase));

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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffToastComponent
  extends _daffToastBase
  implements DaffPrefixable, DaffStatusable, AfterContentInit, AfterViewInit, OnDestroy {
  faTimes = faTimes;

  /** @docs-private */
  @HostBinding('class.daff-toast') class = true;

  /** @docs-private */
  @HostBinding('attr.role') role = 'alert';

  /** @docs-private */
  @HostBinding('attr.aria-atomic') ariaAtomic = 'true';

  @ContentChild(DaffToastActionsDirective)
  _actions: DaffToastActionsDirective;

  @ContentChild(DaffPrefixDirective)
  _prefix: DaffPrefixDirective;

  @ViewChild('container', { read: ElementRef, static: true }) container: ElementRef;

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
        // this.container.nativeElement,
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
