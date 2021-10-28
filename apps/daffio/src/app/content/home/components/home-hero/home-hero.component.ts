import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})

export class DaffioHomeHeroComponent {
  @HostBinding('class.daffio-home-hero') class = true;
}
