import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type DaffLogoType = "icon" | "full";
export enum DaffLogoTypeEnum {
  ICON = "icon",
  FULL = "full"
}

export type DaffLogoColor = "dark" | "light" | "base" | "baseContrast";
export enum DaffLogoColorEnum {
  BLACK = "dark",
  WHITE = "light",
  BASE = "base",
  BASECONTRAST = "baseContrast"
} 

@Component({
  selector: 'daff-branding-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffLogoComponent {
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
   * @docs
   * 
   * Path to the flower in a project, defaults
   * to what is handle by the branding schematics.
   */
  @Input() flowerPath = "/assets/daff-branding/daff-flower.svg";

  /**
   * Helper function to determine if the logo type is "full"
   */
  isFull(): boolean {
    return this.type === DaffLogoTypeEnum.FULL;
  }
}
