import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'daffio-marketing-sidebar',
  templateUrl: './marketing-sidebar.component.html',
  styleUrls: ['./marketing-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioMarketingSidebarComponent {
  links: any[] = [
    { path: '/why-pwa', title: 'Why PWA' },
    { path: '/api', title: 'Docs' },
  ];
}
