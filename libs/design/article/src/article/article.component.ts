/* eslint-disable quote-props */
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ElementRef,
  ViewContainerRef,
  inject,
  DestroyRef,
  afterEveryRender,
} from '@angular/core';

import { DaffArticleCopyButtonService } from '../article-copy-button/service/copy-button.service';

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
  providers: [DaffArticleCopyButtonService],
})
export class DaffArticleComponent {
  constructor(
    private copyButtonService: DaffArticleCopyButtonService,
  ) {
    const elementRef = inject(ElementRef<HTMLElement>);
    const viewContainerRef = inject(ViewContainerRef);

    afterEveryRender({
      write: () => {
        this.copyButtonService.addCopyButtonsToCodeBlocks(elementRef.nativeElement, viewContainerRef);
      },
    });

    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => {
      this.copyButtonService.cleanup();
    });
  }
}
