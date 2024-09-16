import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

/**
 * `DaffSkeletonableDirective` allows a component to display a skeleton loading
 * state by conditionally applying a CSS class. This is useful for indicating to
 * users that content is loading or being processed. This directive can be used to
 * apply a skeleton loading state to any component by toggling the `skeleton`
 * input property. When `skeleton` is `true`, the `daff-skeleton` CSS class
 * is applied, which should style the component to look like a loading placeholder.
 *
 * ## Usage
 *
 * ### Implementing it as an attribute directive
 *
 * ```html
 * <div daffSkeletonable [skeleton]="isLoading">Content</div>
 * ```
 *
 * ### Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  standalone: true,
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [
 *    {
 *      directive: DaffSkeletonableDirective,
 *      inputs: ['skeleton'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * ```scss
 * .daff-skeleton {
 *  @include state.skeleton-screen(48px, 24px);
 * }
 * ```
 *
 * ## Styles
 *
 * The `daff-skeleton` class should be defined in your styles to display the loading
 * state as desired. It can be used in conjuction with the `skeleton-screen` mixin, which provides predefined loading styles.
 */
@Directive({
  selector: '[daffSkeletonable]',
  standalone: true,
})
export class DaffSkeletonableDirective {
  @Input() @HostBinding('class.daff-skeleton') skeleton = false;
}
