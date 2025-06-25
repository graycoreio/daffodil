import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daffio-docs-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
  ],
})

export class DaffioDocsScrollToTopComponent {
  showButton = false;
  faArrowUp = faArrowUp;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('document:scroll')
  onScroll() {
    const currentScrollPosition = this.document.documentElement.scrollTop || this.document.body.scrollTop;

    if (currentScrollPosition > 500) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    this.document.documentElement.scrollTop = 0;
    this.document.body.scrollTop = 0;
  }
}
