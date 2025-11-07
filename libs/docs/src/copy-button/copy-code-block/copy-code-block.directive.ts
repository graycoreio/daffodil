import {
  Directive,
  ElementRef,
  Renderer2,
  inject,
  ViewContainerRef,
  ComponentRef,
  afterNextRender,
  OnDestroy,
} from '@angular/core';

import { DaffDocsCopyButtonComponent } from '../copy-button/copy-button.component';

/**
 * DaffDocsCodeBlockCopyDirective automatically adds copy buttons to code blocks
 * within the host element. It finds all <pre><code> elements and appends a copy
 * button to each one.
 *
 * @example
 * ```html
 * <div daffDocsCopyCodeBlock [innerHTML]="htmlContent | safe"></div>
 * ```
 */
@Directive({
  selector: '[daffDocsCopyCodeBlock]',
  standalone: true,
})
export class DaffDocsCopyCodeBlockDirective implements OnDestroy {
  private elementRef = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);
  private viewContainerRef = inject(ViewContainerRef);
  private buttonRefs: Array<ComponentRef<DaffDocsCopyButtonComponent>> = [];

  constructor() {
    afterNextRender(() => {
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

  ngOnDestroy(): void {
    this.cleanupButtons();
  }
}
