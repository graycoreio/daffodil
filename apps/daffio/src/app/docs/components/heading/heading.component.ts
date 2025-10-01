import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'daffio-ce-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownHeadingComponent implements AfterViewInit {
  @Input() size = 'h1';
  @Input() slug = '';

  iconColor = 'dimgrey';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const heading = this.el.nativeElement.querySelector('h1, h2, h3, h4, h5, h6');
    if (heading) {
      heading.classList.add('daffio-ce-heading');
    }
  }

  onAnchorClick(event: Event) {
    event.preventDefault();
    const baseUrl = document.location.href.split('#')[0];
    const deepUrl = `${baseUrl}#${this.slug}`;
    navigator.clipboard.writeText(deepUrl).then(() => {
      const link = (<HTMLElement>event.target).closest('a');
      link?.classList.add('copied');
      setTimeout(() => link?.classList.remove('copied'), 1500);
    }).catch(err => console.error('Copy failed:', err));
  }
}
