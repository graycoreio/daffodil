import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class DaffioFooterComponent {

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
