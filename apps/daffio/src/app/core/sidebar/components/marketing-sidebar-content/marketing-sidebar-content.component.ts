import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daffio-marketing-sidebar-content',
  templateUrl: './marketing-sidebar-content.component.html',
  styleUrls: ['./marketing-sidebar-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioMarketingSidebarContentComponent {
  links: any[] = [
    { path: '/why-pwa', title: 'Why PWA' },
    { path: '/api', title: 'Docs' },
  ];
}
