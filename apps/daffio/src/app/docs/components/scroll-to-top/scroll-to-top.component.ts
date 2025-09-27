
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ChangeDetectorRef,
  DOCUMENT,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { debounce } from '@daffodil/core';

@Component({
  selector: 'daffio-docs-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FaIconComponent,
  ],
  host: {
    '(document:scroll)': 'onScroll()',
  },
})

export class DaffioDocsScrollToTopComponent {
  showButton = false;
  faArrowUp = faArrowUp;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef,
  ) {}

  @debounce(100)
  onScroll() {
    const currentScrollPosition = this.document.documentElement.scrollTop || this.document.body.scrollTop;

    if (currentScrollPosition > 500) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }

    this.cdr.markForCheck();
  }

  scrollToTop() {
    this.document.documentElement.scrollTop = 0;
    this.document.body.scrollTop = 0;

    this.showButton = false;
  }
}
