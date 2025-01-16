import {
  Component,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export enum LogoSize {
  ICON = 0,
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3
}

@Component({
  selector: 'demo-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LogoComponent{
  @Input() size: LogoSize = LogoSize.ICON;
}
