import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'skeleton-image',
  templateUrl: './skeleton-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonImageComponent {

}
