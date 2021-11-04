import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateComponent {}
