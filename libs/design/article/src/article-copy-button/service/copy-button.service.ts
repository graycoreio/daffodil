import {
  Injectable,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';

import { DaffArticleCopyButtonComponent } from '../copy-button/copy-button.component';

interface ButtonEntry {
  buttonRef: ComponentRef<DaffArticleCopyButtonComponent>;
  preElement: HTMLPreElement;
}

@Injectable()
export class DaffArticleCopyButtonService {
  private buttons: Array<ButtonEntry> = [];

  /**
   * Finds all code blocks and adds copy buttons to them.
   * Skips code blocks with the `nocopy` attribute.
   * @param hostElement - The host element to search for code blocks.
   * @param viewContainerRef - The view container to create the copy button components.
   */
  addCopyButtonsToCodeBlocks(
    hostElement: HTMLElement,
    viewContainerRef: ViewContainerRef,
  ): void {
    const codeBlocks = hostElement.querySelectorAll('pre');
    const encapsulatedElements = Array.from(hostElement.querySelectorAll('.daff-ae'));

    codeBlocks.forEach((pre: HTMLPreElement) => {
      const code = pre.querySelector('code');
      if (!code) {
        return;
      }

      // Skip if nocopy attribute is present
      if (pre.hasAttribute('nocopy')) {
        return;
      }

      // Skip if inside an article-encapsulated component
      if (encapsulatedElements.some(ee => ee.contains(pre))) {
        return;
      }

      // Skip if already has a copy button
      if (pre.querySelector('daff-article-copy-button')) {
        return;
      }

      const textContent = code.textContent || '';

      // Create the copy button component
      const buttonRef = viewContainerRef.createComponent(DaffArticleCopyButtonComponent);
      buttonRef.setInput('content', textContent);

      // Insert button into pre before the code element
      pre.insertBefore(buttonRef.location.nativeElement, code);

      this.buttons.push({
        buttonRef,
        preElement: pre,
      });
    });
  }

  /**
   * Cleanup copy button references
   */
  cleanup(): void {
    this.buttons.forEach(({ buttonRef }) => {
      buttonRef.destroy();
    });
    this.buttons = [];
  }
}
