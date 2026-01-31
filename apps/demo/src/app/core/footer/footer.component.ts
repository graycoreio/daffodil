import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import { DaffIconButtonComponent } from '@daffodil/design/button';
import { DaffContainerComponent } from '@daffodil/design/container';
import { DAFF_LIST_COMPONENTS } from '@daffodil/design/list';

@Component({
  selector: 'demo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    RouterModule,
    DAFF_LIST_COMPONENTS,
    DaffIconButtonComponent,
    DaffContainerComponent,
    FaIconComponent,
  ],
})
export class FooterComponent {
  faTwitter = faTwitter;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;

  links: any[] = [
    { title: 'Support', links: [
      { path: '/help', title: 'Help' },
      { path: '/shipping', title: 'Shipping' },
      { path: '/returns-and-exchanges', title: 'Returns & Exchanges' },
      { path: '/contact', title: 'Contact' },
    ]},
    { title: 'About', links: [
      { path: '/about', title: 'About Daffodil' },
      { path: '/press', title: 'Press' },
      { path: '/careers', title: 'Careers' },
      { path: '/privacy-policy', title: 'Privacy Policy' },
      { path: '/terms-and-conditions', title: 'Terms & Conditions' },
    ]},
    { title: 'Browse', links: [
      { path: '/mens', title: 'Men\'s' },
      { path: '/womens', title: 'Women\'s' },
      { path: '/accessories', title: 'Accessories' },
    ]},
  ];
}
