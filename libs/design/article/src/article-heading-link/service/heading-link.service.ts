import {
  Injectable,
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';

import { DaffArticleHeadingLinkComponent } from '../heading-link/heading-link.component';

interface LinkEntry {
  linkRef: ComponentRef<DaffArticleHeadingLinkComponent>;
  headingElement: HTMLHeadingElement;
}

@Injectable()
export class DaffArticleHeadingLinkService {
  private links: Array<LinkEntry> = [];

  /**
   * Finds all h2, h3, and h4 elements and wraps their text content with heading link components.
   * @param hostElement - The host element to search for heading elements.
   * @param viewContainerRef - The view container to create the heading link components.
   */
  addLinksToHeadings(
    hostElement: HTMLElement,
    viewContainerRef: ViewContainerRef,
  ): void {
    const headings = hostElement.querySelectorAll('h2, h3, h4');

    headings.forEach((heading: HTMLHeadingElement) => {
      if (heading.querySelector('daff-article-heading-link')) {
        return;
      }

      const textContent = heading.textContent?.trim() || '';
      const fragment = heading.id || this.generateFragment(textContent);

      // Set the id on the heading if it doesn't have one
      if (!heading.id) {
        heading.id = fragment;
      }

      // Create the heading link component and set its inputs
      const linkRef = viewContainerRef.createComponent(DaffArticleHeadingLinkComponent);
      linkRef.setInput('fragment', fragment);
      linkRef.setInput('label', textContent);

      // Clear the heading's content and append the link component
      heading.innerHTML = '';
      heading.appendChild(linkRef.location.nativeElement);

      this.links.push({
        linkRef,
        headingElement: heading,
      });
    });
  }

  /**
   * Cleanup heading link references
   */
  cleanup(): void {
    this.links.forEach(({ linkRef }) => {
      linkRef.destroy();
    });
    this.links = [];
  }

  /**
   * Generates a URL-friendly fragment from heading text
   */
  private generateFragment(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}
