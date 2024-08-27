import {
  Directive,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { DaffOpenable } from './openable';

/**
 * A directive that opens or closes a component. It should only be used as an [Angular Host Directive](https://angular.dev/guide/directives/directive-composition-api).
 * It supports both a state and stateless implementation, but only one version should be used within a component.
 *
 * @usage
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

export class DaffOpenableDirective implements DaffOpenable {
  /** Whether or not a component implementing the directive is open */
  @Input() @HostBinding('class.daff-open') open = false;

  /** Whether or not a component should handle state
   *
   * @usage
   * ```ts
   * constructor(private openDirective: DaffOpenableDirective) {
   *  this.openDirective.stateless = true;
   * }
   * ```
   */
  stateless = false;

  /**
   * Event fired when a component is opened (true) or closed (false)
   */
  @Output() toggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Open the component
   */
  reveal() {
    if(!this.stateless) {
      this.open = true;
    }

    this.toggled.emit(true);
  }

  /**
   * Close the component
   */
  hide() {
    if(!this.stateless) {
      this.open = false;
    }

    this.toggled.emit(false);
  }

  /**
   * Open or close the component, depending on if it's currently open or not
   */
  toggle() {
    const state = !this.open;

    if(!this.stateless) {
      this.open = state;
    }

    this.toggled.emit(state);
  }
}
