import {
  Inject,
  OnDestroy,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * This service is used by tree-items to notify their parent
 * that the tree has to be re-computed.
 *
 * This service is a multiton associated with each tree instance.
 * It follows the same lifecycle has the tree it is associated with.
 */
@Inject({})
export class DaffTreeNotifierService implements OnDestroy {

  /**
   * @docs-private
   */
  private _notice: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  /**
   * An observable that emits when the tree needs to be re-computed.
   */
  notice$ = this._notice.asObservable();

  /**
   * `notify` can be called to trigger a re-computation of the tree
   * if data has changed unexpectedly and a re-render did not occur.
   *
   * This should be used sparingly. Instead, prefer updating `data` on the tree
   * itself for performance reasons.
   */
  notify() {
    this._notice.next(true);
  }

  /**
   * Cleanup when the tree is destroyed.
   *
   * @docs-private
   */
  ngOnDestroy(): void {
    this._notice.complete();
  }
}
