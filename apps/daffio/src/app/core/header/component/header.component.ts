import {
  Component,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class DaffioHeaderComponent {
  @HostBinding('class.daffio-header') class = true;
}
