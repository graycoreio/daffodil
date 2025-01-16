import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-home-callout-platforms',
  templateUrl: './home-callout-platforms.component.html',
  styleUrls: ['./home-callout-platforms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

export class DaffioHomeCalloutPlatformsComponent {
  @HostBinding('class.daffio-home-callout-platforms') class = true;
}
