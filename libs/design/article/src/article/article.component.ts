/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  ViewContainerRef,
  afterRenderEffect,
  inject,
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

    afterRenderEffect({
      write: (onCleanup) => {
        this.copyButtonService.addCopyButtonsToCodeBlocks(elementRef.nativeElement, viewContainerRef);

        onCleanup(() => {
          this.copyButtonService.cleanup();
        });
      },
    });
  }
}
