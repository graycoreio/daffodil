import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

export type DaffFeatureMode = 'compact' | 'normal' | undefined;
export enum DaffFeatureModeEnum {
  Compact = 'compact',
  Normal = 'normal'
}

@Component({
  selector: 'daff-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  host: {
    'class': 'daff-feature', 
    '[class.daff-feature--compact]': 'mode === "' + DaffFeatureModeEnum.Compact + '"',
    '[class.daff-feature--normal]': 'mode === "' + DaffFeatureModeEnum.Normal + '"',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffFeatureComponent {

  _mode: DaffFeatureMode = 'normal';

  get mode(): DaffFeatureMode {
    return this._mode;
  }

  @Input()
  set mode(value: DaffFeatureMode) {
    switch(value) {
      case 'compact':
        this._mode='compact';
        break;
      default: this._mode='normal';
    }
  }
}
