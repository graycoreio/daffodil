import {
  ConfigurableFocusTrap,
  ConfigurableFocusTrapFactory,
} from '@angular/cdk/a11y';
import { NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
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
  DaffStatusableDirective,
} from '@daffodil/design';

import { DaffToast } from '../interfaces/toast';
import { daffToastChangesFocus } from '../service/changes-focus';
import { DaffToastActionsDirective } from '../toast-actions/toast-actions.directive';

/**
 * DaffToastComponent provides a way to display and
 * communicate information for user actions or system updates.
 */
@Component({
  selector: 'daff-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
  ],
})
export class DaffToastComponent implements DaffPrefixable, AfterContentInit, AfterViewInit, OnDestroy {
  /** @docs-private */
  @HostBinding('class.daff-toast') class = true;

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
    private _elementRef: ElementRef,
    private _focusTrapFactory: ConfigurableFocusTrapFactory,
    private _focusStack: DaffFocusStackService,
  ) {
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
