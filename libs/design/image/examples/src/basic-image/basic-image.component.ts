import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'basic-image',
  templateUrl: './basic-image.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicImageComponent {

}
