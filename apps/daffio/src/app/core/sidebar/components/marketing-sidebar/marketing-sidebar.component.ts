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
    { path: '/api', title: 'Docs' },
    { path: '/why-pwa', title: 'Why PWA' },
  ];
}
