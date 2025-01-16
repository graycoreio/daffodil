import {
  Component,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

export type DaffLogoType = 'icon' | 'full';
export enum DaffLogoTypeEnum {
  ICON = 'icon',
  FULL = 'full'
}

export type DaffLogoColor = 'dark' | 'light' | 'base' | 'base-contrast';
export enum DaffLogoColorEnum {
  DARK = 'dark',
  LIGHT = 'light',
  BASE = 'base',
  BASECONTRAST = 'base-contrast'
}

@Component({
  selector: 'daff-branding-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DaffLogoComponent {
  @HostBinding('class.daff-branding-logo') class = true;

  /**
   * @docs
   *
   * Rendering property for showing the "full" logo
   * with test, or only the flower.
   */
  @Input() type: DaffLogoType = DaffLogoTypeEnum.FULL;

  /**
   * @docs
   *
   * Determines the color of the logo. The logo supports a
   * smaller subset of DaffColorable, so it
   * has its own custom types.
   */
  @Input() color: DaffLogoColor = DaffLogoColorEnum.BASECONTRAST;

  /**
   * Helper function to determine if the logo type is "full"
   */
  isFull(): boolean {
    return this.type === DaffLogoTypeEnum.FULL;
  }
}
