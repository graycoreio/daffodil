import {
  Component,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  selector: 'daffio-ce-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
  ],
})
export class MarkdownHeadingComponent {
  faLink = faLink;
  @Input() size: HeadingSize = 'h1';
  @Input() slug = '';

  constructor() {}

  onAnchorClick(event: Event) {
    event.preventDefault();
    const baseUrl = document.location.href.split('#')[0];
    const deepUrl = `${baseUrl}#${this.slug}`;
    navigator.clipboard.writeText(deepUrl).then(() => {
      const link = (<HTMLElement>event.target).closest('a');
      const icon = link?.querySelector('.daffio-ce-heading__icon');
      icon?.classList.add('copied');
      setTimeout(() => icon?.classList.remove('copied'), 1500);
    }).catch(err => console.error('Copy failed:', err));
  }
}
