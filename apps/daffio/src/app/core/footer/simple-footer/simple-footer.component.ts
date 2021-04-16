import {
  Component,
  HostBinding,
} from '@angular/core';
import {
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'daffio-simple-footer',
  templateUrl: './simple-footer.component.html',
  styleUrls: ['./simple-footer.component.scss'],
})
export class DaffioSimpleFooterComponent {

  @HostBinding('class.daffio-simple-footer') class = true;

  links: any[] = [
    { path: '/why-pwa', title: 'Why PWA' },
    { path: '/support', title: 'Support' },
  ];

  socialLinks: any[] = [
    { link: 'https://github.com/graycoreio/daffodil', title: 'Github',  icon: faGithub },
    { link: 'https://discord.gg/BdaJVZ53sR', title: 'Discord', icon: faDiscord },
  ];
}
