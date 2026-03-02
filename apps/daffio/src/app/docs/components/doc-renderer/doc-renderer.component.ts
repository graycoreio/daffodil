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

import { DaffArticleComponent } from '@daffodil/design/article';

import { DaffioExampleViewerComponent } from '../example-viewer/example-viewer.component';

/**
 * A component that renders documentation content with embedded example viewers.
 * Accepts raw HTML content then scans for `design-land-example-viewer-container`
 * placeholder elements and replaces them with dynamically created {@link DaffioExampleViewerComponent}
 * instances.
 */
@Component({
  selector: `daffio-doc-renderer`,
  imports: [DaffArticleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
			<daff-article #content>
      </daff-article>
	`,
})
export class DaffioDocRendererComponent {
  /**
   * The raw HTML content to render in the documentation article.
   */
  contents = input<string>();

  private viewContainerRef = inject(ViewContainerRef);
  private elementRef = inject(ElementRef);
  private environmentInjector = inject(EnvironmentInjector);

  private readonly content = viewChild('content', { read: ElementRef });

  constructor() {
    effect(() => {
      const contents = this.contents();
      // if we track `this.content` then this will infinitely recurse
      untracked(() => {
        this.content().nativeElement.innerHTML = contents;
      });
      this.renderExamples();
    });
  }

  /**
   * Scans the rendered content for example placeholder elements and replaces
   * them with dynamically created example viewer components.
   */
  private renderExamples() {
    const examplePlaceholders: HTMLElement[] = Array.from(this.elementRef.nativeElement.querySelectorAll('design-land-example-viewer-container'));

    for (const placeholder of examplePlaceholders) {
      const contentExampleId = placeholder.getAttribute('example');
      const simple = placeholder.getAttribute('simple');
      const exampleRef = this.viewContainerRef.createComponent(DaffioExampleViewerComponent, {
        environmentInjector: this.environmentInjector,
        bindings: [
          inputBinding('example', () => contentExampleId),
          inputBinding('simple', () => simple !== null),
        ],
      });
      placeholder.parentElement.replaceChild(exampleRef.location.nativeElement, placeholder);
    }
  }
}
