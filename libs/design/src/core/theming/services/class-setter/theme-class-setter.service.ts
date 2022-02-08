import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  Inject,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DaffodilThemingService } from '../theming.service';

/**
 * This class updates the body of the app with the appropriate class for the theme.
 * Note that this service is not provided tree-shakably by intention.
 * It is intended to be provided manually during setup.
 */
@Injectable()
export class DaffodilThemeClassSetterService {
	private renderer: Renderer2;
	private subscription: Subscription;

	constructor(
		@Inject(DOCUMENT) private doc: Document,
		private rendererFactory: RendererFactory2,
		private themingService: DaffodilThemingService,
	) {
	  this.renderer = this.rendererFactory.createRenderer(null, null);
	}

	/**
	 * This function is intended to only be called once when the service
	 * is initialized for the very first time. This will mutate the class
	 * on the body of the document for the appropriate theme as controlled
	 * by the state of the application theme.
	 */
	beginThemeSync(): void {
	  this.subscription = this.themingService.getTheme().subscribe((theme) => {
	    // For simplicty, remove all previously applied themes.
	    this.renderer.removeClass(this.doc.body, 'daff-theme-light');
	    this.renderer.removeClass(this.doc.body, 'daff-theme-dark');
	    this.renderer.addClass(this.doc.body, 'daff-theme-' + theme);
	  });
	}

	/**
	 * This unsubscribes from the bodyClass subscription it exists.
	 */
	destroy(): void {
	  if (this.subscription) {
	    this.subscription.unsubscribe();
	  }
	  this.renderer.removeClass(this.doc.body, 'daff-theme-light');
	  this.renderer.removeClass(this.doc.body, 'daff-theme-dark');
	}
}
