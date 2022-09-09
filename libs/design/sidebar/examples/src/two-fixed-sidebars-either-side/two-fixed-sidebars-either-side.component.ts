import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'two-fixed-sidebars-either-side',
  templateUrl: './two-fixed-sidebars-either-side.component.html',
  styleUrls: ['./two-fixed-sidebars-either-side.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoFixedSidebarsEitherSideComponent {

}
