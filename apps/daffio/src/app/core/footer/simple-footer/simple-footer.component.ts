import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'daffio-simple-footer',
  host: {'class': 'daffio-simple-footer'},
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DaffioSimpleFooterComponent {

  links: any[] = [
    {path: '/why-pwa', title: 'Why PWA'},
    {path: '/support', title: 'Support'}
  ];
}
