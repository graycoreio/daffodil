import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

export type DaffFeatureMode = 'compact' | 'normal' | undefined;
export enum DaffFeatureModeEnum {
  Compact = 'compact',
  Normal = 'normal'
}

@Component({
  selector: 'daff-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffFeatureComponent {

  @HostBinding('class.daff-feature') class = true;

  @Input() mode: DaffFeatureMode = DaffFeatureModeEnum.Normal;

  @HostBinding('class.daff-feature--compact') get compact() {
    return this.mode === DaffFeatureModeEnum.Compact;
  }

  @HostBinding('class.daff-feature--normal') get normal() {
    return this.mode === DaffFeatureModeEnum.Normal;
  }
}
