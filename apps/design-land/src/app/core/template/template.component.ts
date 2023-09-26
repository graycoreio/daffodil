import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  templateUrl: './template.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLandTemplateComponent {}
