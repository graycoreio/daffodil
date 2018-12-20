import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'daffio-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffioLogoComponent {
  @Input() type: LogoType = LogoType.FULL;

  isIcon(): boolean {
    return this.type==LogoType.ICON;
  }

  isFull(): boolean {
    return this.type==LogoType.FULL;
  }
}

export enum LogoType {
  ICON = "icon",
  FULL = "full"
}