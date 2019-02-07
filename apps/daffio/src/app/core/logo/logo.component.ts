import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

export type LogoType = "icon" | "full";
export enum LogoTypeEnum {
  ICON = "icon",
  FULL = "full"
}

@Component({
  selector: 'daffio-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffioLogoComponent {
  @Input() type: LogoType = LogoTypeEnum.FULL;

  isIcon(): boolean {
    return this.type === LogoTypeEnum.ICON;
  }

  isFull(): boolean {
    return this.type === LogoTypeEnum.FULL;
  }
}