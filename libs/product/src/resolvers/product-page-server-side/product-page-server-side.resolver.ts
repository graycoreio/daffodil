import { isPlatformBrowser } from '@angular/common'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable, of } from 'rxjs'

import { DaffProductPageResolver } from '../product-page/product-page.resolver';

/**
 * Resolves immediately when in a browser, so client-side loading states can show immediately. 
 * When server-side, this resolver will call the `DaffProductPageResolver`. The purpose of this resolver
 * is to pass full documents to web crawlers for seo audits.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffProductPageServerSideResolver implements Resolve<Observable<boolean>> {
  constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private productPageResolver: DaffProductPageResolver
	) {}
	
	resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
		return isPlatformBrowser(this.platformId) ? of(true) : this.productPageResolver.resolve(route);
	}
}
