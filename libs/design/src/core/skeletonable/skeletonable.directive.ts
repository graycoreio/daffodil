import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

/**
 * The `DaffSkeletonableDirective` allows a component to display a skeleton loading
 * state by conditionally applying a CSS class. This is useful for indicating to
 * users that content is loading or being processed. This directive can be used to
 * apply a skeleton loading state to any component by toggling the `skeleton`
 * input property. When `skeleton` is `true`, the `daff-skeleton` CSS class
 * is applied, which should style the component to look like a loading placeholder.
 *
 * The styles for the`daff-skeleton` class should be defined component's 
 * stylesheets to display the loading state as desired.
 */
@Directive({
  selector: '[daffSkeletonable]',
  standalone: true,
})
export class DaffSkeletonableDirective {
  @Input() @HostBinding('class.daff-skeleton') skeleton = false;
}
