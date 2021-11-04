import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daffio-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioPwaComponent {}
