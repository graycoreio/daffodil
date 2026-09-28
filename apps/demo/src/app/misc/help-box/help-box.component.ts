import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'demo-help-box',
  templateUrl: './help-box.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./help-box.component.scss'],
})
export class HelpBoxComponent {}
