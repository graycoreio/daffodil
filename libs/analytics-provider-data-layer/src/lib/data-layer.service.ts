import { DOCUMENT } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';

import {
  DataLayer,
  DataLayerItem,
} from './data-layer';

export type WindowWithDataLayer = Window & { dataLayer?: DataLayer };

/**
 * A server-side safe dataLayer object that will add elements to the data layer.
 */
@Injectable({ providedIn: 'root' })
export class DaffAnalyticsDataLayer {
  private _window: WindowWithDataLayer | null;

  constructor(@Inject(DOCUMENT) private document: any) {
    this._window = this.document.defaultView;
  }

  push(data: DataLayerItem) {
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
