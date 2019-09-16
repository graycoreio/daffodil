import { Component } from '@angular/core';
import { faGithub, faGitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'daffio-simple-footer',
  host: {'class': 'simple-footer'},
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss']
})
export class DaffioSimpleFooterComponent {
  faGithub = faGithub;
  faGitter = faGitter;
  
  links: any[] = [
    {path: '/why-pwa', title: 'Why PWA'},
    {path: '/support', title: 'Support'}
  ];
}
