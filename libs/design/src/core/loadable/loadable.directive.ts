import {
  Directive,
  Input,
} from '@angular/core';

/**
 * `DaffLoadableDirective` allows a component to display a loading UI
 * by conditionally applying a CSS class. This is useful for indicating to
 * users that a user action is being processed. This directive can be used to
 * apply a loading UI to any component by toggling the `loading`
 * input property. When `loading` is `true`, the `daff-loading` CSS class
 * is applied, which should style the component to look like it's not interactable.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffLoadable [loading]="isLoading">Content</div>
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
 *      directive: DaffLoadableDirective,
 *      inputs: ['loading'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * ```scss
 * :host {
 *  .spinner {
 *    opacity: 0;
 *  }
 *  .daff-loading {
 *    .spinner {
 *      opacity: 1;
 *    }
 *  }
 * }
 * ```
 *
 * The directive applies the `daff-loading` class to the component. The class should be
 * defined in your styles to display the loading state as desired.
 */
@Directive({
  selector: '[daffLoadable]',
  host: {
    '[class.daff-loading]': 'loading',
  },
})
export class DaffLoadableDirective {
  @Input() loading = false;
}
