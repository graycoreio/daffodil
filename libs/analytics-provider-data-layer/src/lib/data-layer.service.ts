import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DaffDataLayer,
  DaffDataLayerItem,
} from './data-layer';

export type WindowWithDataLayer = Window & { dataLayer?: DaffDataLayer };

/**
 * A server-side safe dataLayer object that will add elements to the data layer.
 */
@Injectable({ providedIn: 'root' })
export class DaffAnalyticsDataLayer {
  private _window: WindowWithDataLayer | null;

  constructor(@Inject(DOCUMENT) private document: any) {
    this._window = this.document.defaultView;
  }

  push(data: DaffDataLayerItem) {
    if(!data){
      return;
    }

    if (this._window && !this._window?.dataLayer) {
      this._window.dataLayer = [];
    }

    if ('ecommerce' in data) {
      this._window?.dataLayer?.push({ ecommerce: null });
    }

    this._window?.dataLayer?.push(data);
  }
}
