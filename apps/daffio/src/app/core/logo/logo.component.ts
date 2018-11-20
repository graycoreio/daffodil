import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'daffio-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffioLogoComponent{
  @Input() size: LogoSize = LogoSize.ICON;
}

export enum LogoSize {
  ICON = 0,
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3
}