import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { DaffSidebarFooterComponent } from '@daffodil/design/sidebar';

@Component({
  selector: 'daffio-docs-sidebar-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffSidebarFooterComponent,
    FaIconComponent,
  ],
})
export class DaffioDocsSidebarFooterComponent {
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
