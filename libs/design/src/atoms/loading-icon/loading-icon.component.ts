import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'daff-loading-icon',
  templateUrl: './loading-icon.component.html',
  styleUrls: ['./loading-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.max-width]': 'diameter + "px"'
  }
})
export class DaffLoadingIconComponent {

  /**
   * The (pixel) diameter of the animation
   */
  @Input() diameter = 60;
}
