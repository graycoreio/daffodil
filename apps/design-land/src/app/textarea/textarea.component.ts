import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'design-land-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignLandTextareaComponent {}
