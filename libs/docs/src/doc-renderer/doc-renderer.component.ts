import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  EnvironmentInjector,
  inject,
  input,
  inputBinding,
  untracked,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';

import { DaffArticleComponent } from '@daffodil/design/article';

import { DaffDocsExampleViewerComponent } from '../example-viewer/example-viewer.component';

/**
 * A component that renders documentation content with embedded example viewers.
 * Accepts raw HTML content then scans for `daff-docs-example-viewer`
 * placeholder elements and replaces them with dynamically created {@link DaffioExampleViewerComponent}
 * instances.
 */
@Component({
  selector: `daff-docs-doc-renderer`,
  imports: [DaffArticleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
			<daff-article #content>
      </daff-article>
	`,
})
export class DaffDocsDocRendererComponent {
  /**
   * The raw HTML content to render in the documentation article.
   */
  contents = input<string>();

  private viewContainerRef = inject(ViewContainerRef);
  private elementRef = inject(ElementRef);
  private environmentInjector = inject(EnvironmentInjector);
  private router = inject(Router);

  private readonly content = viewChild('content', { read: ElementRef });

  constructor() {
    effect(() => {
      const contents = this.contents();
      // if we track `this.content` then this will infinitely recurse
      untracked(() => {
        const content = this.content();
        if (content) {
          content.nativeElement.innerHTML = contents;
        }
      });
      this.renderExamples();
      this.handleRelativeLinks();
    });
  }

  /**
   * Scans the rendered content for example placeholder elements and replaces
   * them with dynamically created example viewer components.
   */
  private handleRelativeLinks() {
    const anchors: HTMLAnchorElement[] = Array.from(this.elementRef.nativeElement.querySelectorAll('a'));

    for (const anchor of anchors) {
      anchor.addEventListener('click', (e: MouseEvent) => {
        const href = anchor.getAttribute('href');
        if (href && this.isRelative(href) && !(e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0)) {
          e.preventDefault();
          this.router.navigateByUrl(href);
        }
      });
    }
  }

  private isRelative(href: string): boolean {
    return (
      !href.startsWith('http') &&
      !href.startsWith('//') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !href.startsWith('javascript:')
    );
  }

  /**
   * Scans the rendered content for example placeholder elements and replaces
   * them with dynamically created example viewer components.
   */
  private renderExamples() {
    const examplePlaceholders: HTMLElement[] = Array.from(this.elementRef.nativeElement.querySelectorAll('daff-docs-example-viewer'));

    for (const placeholder of examplePlaceholders) {
      const contentExampleId = placeholder.getAttribute('example') ?? '';
      const simple = placeholder.getAttribute('simple');
      const exampleRef = this.viewContainerRef.createComponent(DaffDocsExampleViewerComponent, {
        environmentInjector: this.environmentInjector,
        bindings: [
          inputBinding('example', () => contentExampleId),
          inputBinding('simple', () => simple !== null),
        ],
      });
      placeholder.parentElement?.replaceChild(exampleRef.location.nativeElement, placeholder);
    }
  }
}
