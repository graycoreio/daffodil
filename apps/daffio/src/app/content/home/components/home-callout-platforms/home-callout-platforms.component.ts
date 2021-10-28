import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-home-callout-platforms',
  templateUrl: './home-callout-platforms.component.html',
  styleUrls: ['./home-callout-platforms.component.scss'],
})

export class DaffioHomeCalloutPlatformsComponent {
  @HostBinding('class.daffio-home-callout-platforms') class = true;
}
