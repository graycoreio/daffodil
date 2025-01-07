import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  isDevMode,
} from '@angular/core';

import { DaffOpenable } from './openable';
import { DaffOpenableStateError } from './utils/state-error';

/**
 * A directive that opens or closes a component. It should only be used as an [Angular Host Directive](https://angular.dev/guide/directives/directive-composition-api).
 * This directive is stateless by default, but it supports both a state and stateless implementation. Only one version should be used within a component.
 *
 * @example Using the DaffOpenableDirective
 * ```ts
 * import {
 *  Component,
 *  ChangeDetectionStrategy,
 * } from '@angular/core';
 *
 * import { DaffOpenableDirective } from '@daffodil/design';
 *
 * @Component({
 *   selector: 'custom-component',
 *   template: `
 *     <button (click)="toggle()">Click me!</button>
 *     <div class="hidden-block">This is a hidden block that can be shown by clicking the button.</div>
 *   `,
 *   styles: [`
 *   :host {
 *     .hidden-block {
 *       display: none;
 *     }
 *
 *     &.daff-open {
 *       .hidden-block {
 *         display: block;
 *       }
 *     }
 *   }`],
 *   changeDetection: ChangeDetectionStrategy.OnPush,
 *   hostDirectives: [{
 *     directive: DaffOpenableDirective,
 *   }],
 * })
 * export class CustomComponent {
 *   constructor(private openDirective: DaffOpenableDirective) {}
 *
 *   toggle() {
 *     this.openDirective.toggle();
 *   }
 * }
 * ```
 */
@Directive({
  selector: '[daffOpenable]',
  standalone: true,
})

export class DaffOpenableDirective implements DaffOpenable, OnChanges {
  /** Whether or not a component implementing the directive is open */
  @Input() @HostBinding('class.daff-open') open = false;

  private _setOpen(v: boolean) {
    if(!this.stateless) {
      this.open = v;
    }
  }

  /** Whether or not a component should handle state
   *
   * @example Setting the `stateless` property on a component
   * ```ts
   * constructor(private openDirective: DaffOpenableDirective) {
   *  this.openDirective.stateless = false;
   * }
   * ```
   */
  stateless = true;

  /**
   * Event fired when a component is opened (true) or closed (false)
   */
  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Open the component
   */
  reveal() {
    this._setOpen(true);

    this.toggled.emit(true);
  }

  /**
   * Close the component
   */
  hide() {
    this._setOpen(false);

    this.toggled.emit(false);
  }

  /**
   * Open or close the component, depending on if it's currently open or not
   */
  toggle() {
    const state = !this.open;

    this._setOpen(state);

    this.toggled.emit(state);
  }

  ngOnChanges(changes: SimpleChanges) {
    /**
     * Throw an error if open is set in a component that is not stateless
     */
    if(changes.open.currentValue && !this.stateless) {
      this.open = changes.open.previousValue;

      if(isDevMode()) {
        throw new Error(DaffOpenableStateError);
      }
    }
  }
}
