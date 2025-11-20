import {
  Injectable,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';

import { DaffArticleCopyButtonComponent } from '../copy-button/copy-button.component';

interface ButtonWrapper {
  buttonRef: ComponentRef<DaffArticleCopyButtonComponent>;
  wrapper: HTMLElement;
  preElement: HTMLPreElement;
  originalParent: Node | null;
  nextSibling: Node | null;
}

@Injectable()
export class DaffArticleCopyButtonService {
  private buttonWrappers: Array<ButtonWrapper> = [];

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
    this.cleanup();

    const codeBlocks = hostElement.querySelectorAll('pre');

    codeBlocks.forEach((pre: HTMLPreElement) => {
      const code = pre.querySelector('code');
      if (!code) {
        return;
      }

      // Skip if nocopy attribute is present
      if (pre.hasAttribute('nocopy')) {
        return;
      }

      const textContent = code.textContent || '';

      const originalParent = pre.parentNode;
      const nextSibling = pre.nextSibling;

      // Create a wrapper for positioning the copy button
      const wrapper = document.createElement('div');
      wrapper.classList.add('daff-article-copy-button-wrapper');
      wrapper.style.position = 'relative';

      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      // Create the copy button component
      const buttonRef = viewContainerRef.createComponent(DaffArticleCopyButtonComponent);

      // Pass the code snippet to the button
      buttonRef.setInput('content', textContent);

      // Add copy button to the wrapper
      wrapper.appendChild(buttonRef.location.nativeElement);

      this.buttonWrappers.push({
        buttonRef,
        wrapper,
        preElement: pre,
        originalParent,
        nextSibling,
      });
    });
  }

  /**
   * Cleanup copy button references and wrapper elements
   */
  cleanup(): void {
    this.buttonWrappers.forEach(({ buttonRef, wrapper, preElement, originalParent, nextSibling }) => {
      buttonRef.destroy();

      // Restore the pre element to its original position
      if (originalParent) {
        if (nextSibling && nextSibling.parentNode === originalParent) {
          originalParent.insertBefore(preElement, nextSibling);
        } else {
          originalParent.appendChild(preElement);
        }
      }

      // Remove the wrapper element
      wrapper.remove();
    });
    this.buttonWrappers = [];
  }
}
