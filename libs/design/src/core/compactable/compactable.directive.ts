import {
  Directive,
  Input,
} from '@angular/core';

/**
 * `DaffCompactableDirective` allows a component to conditionally apply a compact
 * style by toggling a CSS class. This is useful for creating components that can
 * switch between regular and compact styles based on the `compact` property.
 *
 * @example Implementing it as an attribute directive
 *
 * ```html
 * <div daffCompactable [compact]="isCompact">Content goes here</div>
 * ```
 *
 * In this example, the `daff-compact` class is applied to the `div` element when
 * `isCompact` is `true`, making the `div` display its compact state.
 *
 * @example Implementing it as an Angular host directive
 *
 * ```ts
 * @Component({
 *  selector: 'custom-component',
 *  template: 'custom-component.html',
 *  hostDirectives: [
 *    {
 *      directive: DaffCompactableDirective,
 *      inputs: ['compact'],
 *    },
 *  ],
 * })
 * export class CustomComponent { }
 * ```
 *
 * The directive applies the `daff-compact` class to the component and
 * should be defined in your styles to display the compact state as desired.
 *
 * ```scss
 * :host {
 *  padding: 8px 16px;
 *
 *  &.daff-compact {
 *    padding: 4px 8px;
 *  }
 * }
 * ```
 */
@Directive({
  selector: '[daffCompactable]',
  host: {
    '[class.daff-compact]': 'compact',
  },
})
export class DaffCompactableDirective {
  /**
   * Controls whether the component is compact.
   */
  @Input() compact = false;
}
