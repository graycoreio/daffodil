import {
  Directive,
  HostBinding,
} from '@angular/core';

/**
 * A directive that gives a component the ability to manage a DaffContainerComponent's layout.
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
 */
@Directive({
  selector: '[daffManageContainerLayout]',
  standalone: true,
})
export class DaffManageContainerLayoutDirective {
  @HostBinding('class.daff-manage-container-layout') class = true;
}
