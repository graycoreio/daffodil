import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-home-callout-pwa',
  templateUrl: './home-callout-pwa.component.html',
  styleUrls: ['./home-callout-pwa.component.scss'],
})

export class DaffioHomeCalloutPwaComponent {
  @HostBinding('class.daffio-home-callout-pwa') class = true;
}
