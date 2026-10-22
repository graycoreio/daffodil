import {
  Directive,
  Input,
} from '@angular/core';

/**
 * Enforces consistent use of the skeleton loading state.
 */
@Directive({
  selector: '[daffSkeletonable]',
  host: {
    '[class.daff-skeleton]': 'skeleton',
  },
})
export class DaffSkeletonableDirective {
  /**
   * Whether the component displays a skeleton loading screen.
   */
  @Input() skeleton = false;
}
