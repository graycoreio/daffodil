import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'daffio-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DaffioHeaderComponent {
  @HostBinding('class.daffio-header') class = true;
  @Input() @HostBinding('class.bordered') bordered = false;
}
