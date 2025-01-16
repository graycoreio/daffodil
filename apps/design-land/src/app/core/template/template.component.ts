import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DesignLandTemplateComponent {}
