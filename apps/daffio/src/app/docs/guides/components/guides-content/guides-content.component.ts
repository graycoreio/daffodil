import {
  Component,
  ChangeDetectionStrategy,
  input,
  effect,
  inject,
  ViewContainerRef,
  ComponentRef,
  Renderer2,
  ElementRef,
  afterRenderEffect,
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
  private renderer = inject(Renderer2);
  private viewContainerRef = inject(ViewContainerRef);
  private buttonRefs: Array<ComponentRef<DaffDocsCopyButtonComponent>> = [];

  constructor(
    private tocRegistry: DaffioDocsTocService,
  ) {
    effect((onCleanup) => {
      this.tocRegistry.set(this.doc().tableOfContents);
      onCleanup(() => {
        this.tocRegistry.set([]);
        this.cleanupButtons();
      });
    });

    afterRenderEffect(() => {
      this.doc();
      this.addCopyButtonsToCodeBlocks();
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

      this.renderer.setStyle(pre, 'position', 'relative');

      // Create the copy button component
      const buttonRef = this.viewContainerRef.createComponent(DaffDocsCopyButtonComponent);

      // Pass the code snippet to the button
      buttonRef.setInput('content', textContent);

      const buttonElement = buttonRef.location.nativeElement;

      // this.renderer.addClass(buttonElement, 'daff-positioned-top-right');
      this.renderer.setStyle(buttonElement, 'position', 'absolute');
      this.renderer.setStyle(buttonElement, 'top', '0.5rem');
      this.renderer.setStyle(buttonElement, 'right', '0.5rem');
      this.renderer.setStyle(buttonElement, 'z-index', '1');

      // Add copy button to the code block
      this.renderer.appendChild(pre, buttonElement);

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
