import {
  Injectable,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';

import { DaffDocsCopyButtonComponent } from '../copy-button/copy-button.component';

@Injectable()
export class CodeBlockCopyButtonService {
  private buttonRefs: Array<ComponentRef<DaffDocsCopyButtonComponent>> = [];

  /**
   * Finds all code blocks and adds copy buttons to them
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

      const textContent = code.textContent || '';

      pre.style.position = 'relative';

      // Create the copy button component
      const buttonRef = viewContainerRef.createComponent(DaffDocsCopyButtonComponent);

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
  cleanup(): void {
    this.buttonRefs.forEach(ref => ref.destroy());
    this.buttonRefs = [];
  }
}
