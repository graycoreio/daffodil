import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';

export type DaffContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
export enum DaffContainerSizeEnum {
  XSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
  XLarge = 'xl'
}

@Component({
  selector: 'daff-container',
  styleUrls: ['./container.component.scss'],
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffContainerComponent {

  @Input() size: DaffContainerSize;

  @HostBinding('class.daff-container') class = true;

  @HostBinding('class.daff-container--xs') get xs() {
    return this.size === DaffContainerSizeEnum.XSmall;
  }

  @HostBinding('class.daff-container--sm') get sm() {
    return this.size === DaffContainerSizeEnum.Small;
  }

  @HostBinding('class.daff-container--md') get md() {
    return this.size === DaffContainerSizeEnum.Medium;
  }

  @HostBinding('class.daff-container--lg') get lg() {
    return this.size === DaffContainerSizeEnum.Large;
  }

  @HostBinding('class.daff-container--xl') get xl() {
    return this.size === DaffContainerSizeEnum.XLarge;
  }
}