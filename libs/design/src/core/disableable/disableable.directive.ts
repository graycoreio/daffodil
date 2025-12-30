import {
  Directive,
  Input,
} from '@angular/core';

/**
 * `DaffDisableableDirective` allows a component to display a disabled UI
 * by conditionally applying a CSS class. This is useful for indicating to
 * users that content is loading or being processed. This directive can be used to
 * apply a disabled UI to any component by toggling the `disabled`
 * input property. When `disabled` is `true`, the `daff-disabled` CSS class
 * is applied, which should style the component to look like it's not interactable.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffDisableable [disabled]="isDisabled">Content</div>
 * ```
 *
 * @example Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [
 *    {
 *      directive: DaffDisableableDirective,
 *      inputs: ['disabled'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * ```scss
 * :host {
 *  .daff-disabled {
 *    cursor: not-allowed;
 *    opacity: 0.5;
 *  }
 * }
 * ```
 *
 * The directive applies the `daff-disabled` class to the component. The class should be
 * defined in your styles to display the loading state as desired.
 */
@Directive({
  selector: '[daffDisableable]',
  host: {
    '[class.daff-disabled]': 'disabled',
  },
})
export class DaffDisableableDirective {
  @Input() disabled = false;
}
