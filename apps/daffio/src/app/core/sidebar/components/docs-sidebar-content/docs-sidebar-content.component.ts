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
    { path: '/docs/guides', title: 'Guides' },
    { path: '/docs/packages', title: 'Packages' },
    { path: '/docs/api', title: 'API Reference' },
  ];
}
