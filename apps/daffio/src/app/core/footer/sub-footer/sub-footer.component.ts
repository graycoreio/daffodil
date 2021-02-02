import {
  Component,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'daffio-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DaffioSubFooterComponent {
  @HostBinding('class.daffio-sub-footer') class = true;
}
