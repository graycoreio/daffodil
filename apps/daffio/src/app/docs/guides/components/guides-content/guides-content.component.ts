import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
  inject,
  ComponentRef,
  ElementRef,
  afterRenderEffect,
  DestroyRef,
  ViewContainerRef,
} from '@angular/core';

import { DaffDocsCopyButtonComponent } from '@daffodil/docs';
import {
  DaffDoc,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DaffioSafeHtmlPipe } from '../../../../core/html-sanitizer/safe.pipe';
import { DaffioDocViewerComponent } from '../../../components/doc-viewer/doc-viewer.component';
import { DaffioDocsDynamicContent } from '../../../dynamic-content/dynamic-content.type';
import { DaffioDocsTocService } from '../../../toc/toc.service';

@Component({
  selector: 'daffio-docs-guides-content',
  templateUrl: './guides-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioDocViewerComponent,
    DaffioSafeHtmlPipe,
  ],
})
export class DaffioDocsGuidesContentComponent implements DaffioDocsDynamicContent<DaffDoc> {
  static readonly kind = DaffDocKind.GUIDE;

  doc = input<DaffDoc>();

  private elementRef = inject(ElementRef<HTMLElement>);
  private destroyRef = inject(DestroyRef);
  private viewContainerRef = inject(ViewContainerRef);
  private buttonRefs: Array<ComponentRef<DaffDocsCopyButtonComponent>> = [];

  constructor(
    private tocRegistry: DaffioDocsTocService,
  ) {
    this.destroyRef.onDestroy(() => {
      this.cleanupButtons();
    });

    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => {
        this.tocRegistry.set([]);
      });
    });

    afterRenderEffect({
      write: () => {
        this.doc();
        this.addCopyButtonsToCodeBlocks();
      },
    });
  }

  /**
   * Finds all code blocks and adds copy buttons to them
   */
  private addCopyButtonsToCodeBlocks(): void {
    this.cleanupButtons();

    const codeBlocks = this.elementRef.nativeElement.querySelectorAll('pre');

    codeBlocks.forEach((pre: HTMLPreElement) => {
      const code = pre.querySelector('code');
      if (!code) {
        return;
      }

      const textContent = code.textContent || '';

      pre.style.position = 'relative';

      // Create the copy button component
      const buttonRef = this.viewContainerRef.createComponent(DaffDocsCopyButtonComponent);

      // Pass the code snippet to the button
      buttonRef.setInput('content', textContent);

      const buttonElement = buttonRef.location.nativeElement;

      const innerButton = buttonElement.querySelector('button');
      if (innerButton) {
        innerButton.classList.add('daff-copy-code-block');
      }

      // Add copy button to the code block
      pre.appendChild(buttonElement);

      this.buttonRefs.push(buttonRef);
    });
  }

  /**
   * Cleanup copy button references
   */
  private cleanupButtons(): void {
    this.buttonRefs.forEach(ref => ref.destroy());
    this.buttonRefs = [];
  }
}
