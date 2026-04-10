import {
  Directive,
  Input,
} from '@angular/core';

/**
 * Enforces consistent use of the compact property.
 */
@Directive({
  selector: '[daffCompactable]',
  host: {
    '[class.daff-compact]': 'compact',
  },
})
export class DaffCompactableDirective {
  /**
   * Whether the component is compact.
   */
  @Input() compact = false;
}
