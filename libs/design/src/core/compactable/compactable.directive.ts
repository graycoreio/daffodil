import {
  Directive,
  HostBinding,
  Input,
} from '@angular/core';

/**
 * The `DaffCompactableDirective` allows a component to conditionally apply a compact
 * style by toggling a CSS class. This is useful for creating components that can
 * switch between regular and compact styles based on the `compact` property.
 *
 * ## Example
 *
 * ```html
 * <div daffCompactable [compact]="isCompact">Content goes here</div>
 * ```
 *
 * In this example, the `daff-compact` class is applied to the `div` element when
 * `isCompact` is `true`, making the `div` display its compact state.
 *
 * ## Styles
 *
 * The `daff-compact` class should be defined in your styles to display the compact
 * state as desired.
 */
@Directive({
  selector: '[daffCompactable]',
  standalone: true,
})
export class DaffCompactableDirective {
  @Input() @HostBinding('class.daff-compact') compact = false;
}
