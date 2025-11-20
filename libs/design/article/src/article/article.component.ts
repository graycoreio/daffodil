/* eslint-disable quote-props */
import { DOCUMENT } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  ViewContainerRef,
  inject,
  DestroyRef,
} from '@angular/core';

import { DaffDocsCodeBlockCopyButtonService } from '@daffodil/docs';

/**
 * A component for creating articles within your page.
 */
@Component({
  selector: 'daff-article',
  template: '<ng-content></ng-content>',
  styleUrls: ['./article.component.scss'],
  host: {
    'class': 'daff-article',
    'role': 'article',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DaffDocsCodeBlockCopyButtonService],
})
export class DaffArticleComponent {
  constructor(
    private copyButtonService: DaffDocsCodeBlockCopyButtonService,
  ) {
    const elementRef = inject(ElementRef<HTMLElement>);
    const viewContainerRef = inject(ViewContainerRef);
    const document = inject(DOCUMENT);

    let observer: MutationObserver | null = null;

    if (
      document?.defaultView &&
      typeof document.defaultView.MutationObserver !== 'undefined'
    ) {
      observer = new document.defaultView.MutationObserver(mutations => {
        let buttonsAdded = false;
        for (const mutation of mutations) {
          if (
            mutation.type === 'childList' &&
            mutation.target instanceof document.defaultView.HTMLDivElement &&
            mutation.target.classList.contains('daff-docs-copy-button-wrapper')
          ) {
            buttonsAdded = true;
            break;
          }
        }
        if (!buttonsAdded) {
          this.copyButtonService.addCopyButtonsToCodeBlocks(elementRef.nativeElement, viewContainerRef);
        }
      });
      observer.observe(elementRef.nativeElement, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    }

    // Clean up observer and copy buttons when component is destroyed
    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      this.copyButtonService.cleanup();
    });
  }
}

