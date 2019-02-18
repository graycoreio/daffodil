import { Component } from '@angular/core';

@Component({
  selector: 'daffio-full-footer',
  host: {'class': 'full-footer'},
  templateUrl: './full-footer.component.html',
  styleUrls: ['./full-footer.component.scss']
})
export class DaffioFullFooterComponent {

  links: any[] = [
    {title: 'About', links: [
      {path: '/company', title: 'Company'},
      {path: '/careers', title: 'Careers'},
      {path: '/support', title: 'Support'}
    ]},
    {title: 'Get Started', links: [
      {path: '/documentation', title: 'Documentation'},
      {path: '/examples', title: 'Examples'}
    ]}
  ];
}
