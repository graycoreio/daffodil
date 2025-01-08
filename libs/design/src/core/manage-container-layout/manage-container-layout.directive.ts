import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * `DaffManageContainerLayoutDirective` gives a component the ability to manage a `DaffContainerComponent`'s layout.
 * By including this directive, predetermined layout styles are passed down to the container.
 *
 * To understand the motivation for this directive, consider:
 *
 * ```html
 * <daff-container>
 *  <daff-hero></daff-hero>
 * </daff-container>
 * ```
 * vs.
 *
 * ```html
 * <daff-hero>
 *   <daff-container></daff-container>
 * </daff-hero>
 * ```
 *
 * The former may inappropriately constrain the width of its child elements,
 * while the latter (without `DaffManageContainerLayoutDirective`) may unexpectedly
 * interfere in the layout features of its parent element (i.e. display: grid, display: flex).
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <my-custom-component daffManageContainerLayout>
 *  <daff-container size="lg"></daff-container>
 * </my-custom-component>
 * ```
 *
 * ```scss
 * :host {
 *  display: grid;
 *  grid-template-columns: 1fr 1fr;
 * }
 * ```
 *
 * @example Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  standalone: true,
 *  selector: 'my-custom-component',
 *  template: 'my-custom-component.html',
 *  hostDirectives: [{ directive: DaffManageContainerLayoutDirective }],
 * })
 * export class MyCustomComponent { }
 *
 * ```scss
 * :host {
 *  display: grid;
 *  grid-template-columns: 1fr 1fr;
 * }
 * ```
 *
 * This directive will apply the `daff-manage-container-layout` class to your component, ensuring that the styles set on `:host` are passed down to the container.
 */

@Directive({
  selector: '[daffManageContainerLayout]',
  standalone: true,
})
export class DaffManageContainerLayoutDirective {
  @HostBinding('class.daff-manage-container-layout') class = true;
}
