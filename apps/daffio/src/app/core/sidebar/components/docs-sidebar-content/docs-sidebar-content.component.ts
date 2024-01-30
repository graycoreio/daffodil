import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daffio-docs-sidebar-content',
  templateUrl: './docs-sidebar-content.component.html',
  styleUrls: ['./docs-sidebar-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioDocsSidebarContentComponent {
  links: any[] = [
    { path: '/packages', title: 'Packages' },
    { path: '/api', title: 'API Index' },
  ];
}
