import { Component } from '@angular/core';

@Component({
  selector: 'demo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  links: any[] = [
    {title: 'Support', links: [
      {path: '/help', title: "Help"},
      {path: '/shipping', title: "Shipping"},
      {path: '/returns-and-exchanges', title: "Returns & Exchanges"},
      {path: '/contact', title: "Contact"}
    ]},
    {title: 'About', links: [
      {path: '/about', title: "About Daffodil"},
      {path: '/press', title: "Press"},
      {path: '/careers', title: "Careers"},
      {path: '/privacy-policy', title: "Privacy Policy"},
      {path: '/terms-and-conditions', title: "Terms & Conditions"}
    ]},
    {title: 'Browse', links: [
      {path: '/mens', title: "Men's"},
      {path: '/womens', title: "Women's"},
      {path: '/accessories', title: "Accessories"}
    ]}
  ];
}
