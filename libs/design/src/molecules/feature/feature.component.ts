import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'daff-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  host: {'class': 'daff-feature'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffFeatureComponent {

}