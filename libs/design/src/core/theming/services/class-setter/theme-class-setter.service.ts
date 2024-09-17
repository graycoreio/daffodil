import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  Inject,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { DaffTheme } from '../../types/theme';
import { DaffThemingService } from '../theming.service';

export const DAFF_THEME_DARK_CSS_CLASS = 'daff-theme-dark';
export const DAFF_THEME_LIGHT_CSS_CLASS = 'daff-theme-light';

/**
 * This class updates the body of the application with the theme's appropriate class.
 * Note that this service is not provided tree-shakably by intention.
 * It is intended to be provided manually during setup.
 */
@Injectable()
export class DaffThemeClassSetterService {
  private renderer: Renderer2;
  private subscription: Subscription;
  private doc?: Document;

  constructor(
    @Inject(DOCUMENT) _doc: any,
    private rendererFactory: RendererFactory2,
    private themingService: DaffThemingService,
  ) {
    this.doc = <Document>_doc;
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  /**
   * This function is intended to only be called once when the service
   * is initialized for the very first time. This will mutate the class
   * on the body of the document for the appropriate theme as controlled
   * by the state of the application's theme.
   */
  beginThemeSync(): void {
    this.subscription = this.themingService.getTheme().subscribe((theme) => {
      // For simplicty, remove all previously applied themes.
      this.renderer.removeClass(this.doc.body, DAFF_THEME_LIGHT_CSS_CLASS);
      this.renderer.removeClass(this.doc.body, DAFF_THEME_DARK_CSS_CLASS);
      this.renderer.addClass(this.doc.body, theme === DaffTheme.Dark ? DAFF_THEME_DARK_CSS_CLASS : DAFF_THEME_LIGHT_CSS_CLASS);
    });
  }

  /**
   * This unsubscribes from the bodyClass subscription that exists.
   */
  destroy(): void {
    this.subscription?.unsubscribe();
    this.renderer.removeClass(this.doc.body, DAFF_THEME_LIGHT_CSS_CLASS);
    this.renderer.removeClass(this.doc.body, DAFF_THEME_DARK_CSS_CLASS);
  }
}
