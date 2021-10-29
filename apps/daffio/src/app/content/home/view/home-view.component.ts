import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daffio-home-view',
  templateUrl: './home-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioHomeViewComponent {}
