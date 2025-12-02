import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'daff-hint',
  template: '<ng-content></ng-content>',
  styleUrls: ['./hint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daff-hint',
    '[class.validated]': 'validated',
  },
})
export class DaffHintComponent {
  /**
   * Displays a validated hint UI.
   * */
  @Input() validated = false;
}
