import {
  Component,
  ChangeDetectionStrategy,
  input,
} from '@angular/core';

@Component({
  selector: 'daff-hint',
  template: '<ng-content></ng-content>',
  styleUrl: './hint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-hint',
    '[class.validated]': 'validated()',
  },
})
export class DaffHintComponent {
  /**
   * Displays a validated hint UI.
   * */
  validated = input(false);
}
