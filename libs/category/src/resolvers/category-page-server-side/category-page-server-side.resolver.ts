import { isPlatformBrowser } from '@angular/common'
import { Inject, Injectable, PLATFORM_ID } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Observable, of } from 'rxjs'

import { DaffCategoryPageResolver } from '../category-page/category-page.resolver';

/**
 * Resolves immediately when in a browser, so client-side loading states can show immediately. 
 * When server-side, this resolver will call the `DaffCategoryPageResolver`. The purpose of this resolver 
 * is to pass full documents to web crawlers for seo audits.
 */
@Injectable({
	providedIn: 'root'
})
export class DaffCategoryPageServerSideResolver implements Resolve<Observable<boolean>> {
  constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private categoryPageResolver: DaffCategoryPageResolver
	) {}
	
	resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
		return isPlatformBrowser(this.platformId) ? of(true) : this.categoryPageResolver.resolve(route);
	}
}
