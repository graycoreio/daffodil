import {
  Injectable,
  inject,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
} from '@angular/router';
import { Observable } from 'rxjs';

import {
  DaffProductDriver,
  DaffProductServiceInterface,
  DaffProductDriverResponse,
} from '@daffodil/product/driver';

@Injectable({
  providedIn: 'root',
})
export class ProductResolver {
  private productDriver: DaffProductServiceInterface = inject(DaffProductDriver);

  resolve(route: ActivatedRouteSnapshot): Observable<DaffProductDriverResponse> {
    const fullUrl = route.pathFromRoot
      .map(segment => segment.url.map(urlSegment => urlSegment.path).join('/'))
      .filter(path => path.length > 0)
      .join('/');
    return this.productDriver.getByUrl(fullUrl || '/');
  }
}

export const productResolver: ResolveFn<DaffProductDriverResponse> =
  (route: ActivatedRouteSnapshot) => inject(ProductResolver).resolve(route);
