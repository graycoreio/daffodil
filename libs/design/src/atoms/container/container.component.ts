import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

export type DaffContainerSize = "xs" | "sm" | "md" | "lg" | "xl" | undefined;
export enum DaffContainerSizeEnum {
  XSmall = "xs",
  Small = "sm",
  Medium = "md",
  Large = "lg",
  XLarge = "xl"
}

@Component({
  selector: 'daff-container',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: '<ng-content></ng-content>',
  host: {
    class: 'daff-container',
    '[class.daff-container--xs]':'size === "' + DaffContainerSizeEnum.XSmall + '"',
    '[class.daff-container--sm]':'size === "' + DaffContainerSizeEnum.Small + '"',
    '[class.daff-container--md]':'size === "' + DaffContainerSizeEnum.Medium + '"',
    '[class.daff-container--lg]':'size === "' + DaffContainerSizeEnum.Large + '"',
    '[class.daff-container--xl]':'size === "' + DaffContainerSizeEnum.XLarge + '"',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffContainerComponent {
  @Input() size: DaffContainerSize;
}