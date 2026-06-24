import {
  Inject,
  Injectable,
  DOCUMENT,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const HEADER_WITH_ID_SELECTOR = 'h1[id],h2[id],h3[id],h4[id],h5[id],[daffioDocsTocHeader][id]';
/**
 * The height of the nav header, in pixels.
 */
const NAV_HEADER_OFFSET = 64;

@Injectable()
export class DaffioActiveHeaderService implements OnDestroy {
  /**
   * True when the service is processing a scroll event.
   */
  private _ticking = false;
  private _fragment = new BehaviorSubject<string | null>(null);
  private _scrollListener = () => {
    if (!this._ticking) {
      this.document.defaultView.requestAnimationFrame(() => {
        const headers = [...this.document.querySelectorAll(HEADER_WITH_ID_SELECTOR)];
        const onScreenHeaderIndex = headers.findIndex(el => {
          const rect = el.getBoundingClientRect();
          return rect.bottom >= 0;
        });
        let fragment: string | null = null;
        if (onScreenHeaderIndex !== -1) {
          // if the topmost visible header is within the "top of the screen" (or just the first header in the DOM)
          // use that header as the active fragment
          // if not, use the header just above the topmost visible one
          fragment = onScreenHeaderIndex === 0 || headers[onScreenHeaderIndex].getBoundingClientRect().top <= (NAV_HEADER_OFFSET * 1.5)
            ? headers[onScreenHeaderIndex]?.getAttribute('id')
            : headers[onScreenHeaderIndex - 1]?.getAttribute('id');
        }
        this._fragment.next(fragment);
        this._ticking = false;
      });

      this._ticking = true;
    }
  };

  readonly fragment$ = this._fragment.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.document.addEventListener('scroll', this._scrollListener);
  }

  ngOnDestroy(): void {
    this.document.removeEventListener('scroll', this._scrollListener);
  }
}
