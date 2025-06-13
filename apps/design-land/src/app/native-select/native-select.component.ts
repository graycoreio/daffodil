import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'design-land-native-select',
  templateUrl: './native-select.component.html',
  styleUrls: ['./native-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DesignLandNativeSelectComponent {}
