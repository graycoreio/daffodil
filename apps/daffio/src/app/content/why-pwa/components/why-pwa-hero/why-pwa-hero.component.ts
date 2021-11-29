import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-why-pwa-hero',
  templateUrl: './why-pwa-hero.component.html',
  styleUrls: ['./why-pwa-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffioWhyPwaHeroComponent {
  @HostBinding('class.daffio-why-pwa-hero') class = true;
}
