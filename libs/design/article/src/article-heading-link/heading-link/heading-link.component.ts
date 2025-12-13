import {
  DOCUMENT,
  isPlatformBrowser,
} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  NgZone,
  OnDestroy,
  signal,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import {
  Router,
  RouterLink,
} from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faLink,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';
import { DAFF_ICON_BUTTON_COMPONENTS } from '@daffodil/design/button';

@Component({
  selector: 'daff-article-heading-link',
  templateUrl: './heading-link.component.html',
  styleUrl: './heading-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  hostDirectives: [
    { directive: DaffArticleEncapsulatedDirective },
  ],
  imports: [
    RouterLink,
    FaIconComponent,
    DAFF_ICON_BUTTON_COMPONENTS,
  ],
})
export class DaffArticleHeadingLinkComponent implements OnDestroy {
  fragment = input.required<string>();
  label = input.required<string>();

  private timeoutId?: ReturnType<typeof setTimeout>;

  protected copied = signal(false);

  protected readonly faLink = faLink; // default link icon
  protected readonly faCheck = faCheck; // check icon for copied state
  private _ngZone = inject(NgZone);
  private _router = inject(Router);
  private _platformId = inject(PLATFORM_ID);
  private _document = inject(DOCUMENT);

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  async copyLink(): Promise<void> {
    if (!isPlatformBrowser(this._platformId)) {
      return;
    }

    try {
      // Create URL tree with current route and fragment
      const urlTree = this._router.createUrlTree(['.'], {
        fragment: this.fragment(),
        queryParamsHandling: 'preserve',
        relativeTo: this._router.routerState.root,
      });

      // Serialize to get the path, then construct full URL
      const path = this._router.serializeUrl(urlTree);
      const origin = this._document.defaultView?.location.origin || '';
      const fullUrl = `${origin}${path}`;

      // Write full URL to clipboard
      await navigator.clipboard.writeText(fullUrl);
      this.copied.set(true);
      clearTimeout(this.timeoutId);
      this._ngZone.runOutsideAngular(() => {
        this.timeoutId = setTimeout(() => {
          this._ngZone.run(() => this.copied.set(false));
        }, 1500);
      });
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  get ariaLabel() {
    return this.copied() ? 'Copied link to clipboard' : 'Copy link to clipboard';
  }
}
