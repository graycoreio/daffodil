import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-why-pwa-solution',
  templateUrl: './why-pwa-solution.component.html',
  styleUrls: ['./why-pwa-solution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioWhyPwaSolutionComponent {
  @HostBinding('class.daffio-why-pwa-solution') class = true;
}
