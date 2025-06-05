import {
  Injectable,
  signal,
} from '@angular/core';

import { DaffDocTableOfContents } from '@daffodil/docs-utils';

/**
 * A dumb singleton to hold the ToC on the current page so the sidebar can access it.
 */
@Injectable({ providedIn: 'root' })
export class DaffioDocsTocService {
  private readonly _toc = signal<DaffDocTableOfContents>([]);

  readonly toc = this._toc.asReadonly();

  set(toc: DaffDocTableOfContents) {
    this._toc.set(toc);
  }
}
