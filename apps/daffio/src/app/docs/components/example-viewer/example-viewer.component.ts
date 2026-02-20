import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  Type,
} from '@angular/core';

import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

import { DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP } from './example-components-map.token';
import { DaffioExampleViewerCodeComponent } from './example-viewer-code/example-viewer-code.component';
import { DaffioExampleViewerPreviewComponent } from './example-viewer-preview/example-viewer-preview.component';

/**
 * A component that dynamically loads and renders example components.
 */
@Component({
  selector: 'daffio-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrl: './example-viewer.component.scss',
  host: {
    class: 'daffio-example-viewer',
    '[class.simple]': 'simple()',
  },
  hostDirectives: [{
    directive: DaffArticleEncapsulatedDirective,
  }],
  imports: [
    DaffioExampleViewerPreviewComponent,
    DaffioExampleViewerCodeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioExampleViewerComponent {
  /**
   * Whether to show the source files.
   */
  simple = input(false);

  /**
   * The identifier of the example component to render.
   * Must match a key in {@link DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP}.
   */
  example = input.required<string>();

  components = inject(DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP);

  private cdRef = inject(ChangeDetectorRef);

  /**
   * The dynamically loaded component type to render.
   */
  exampleComponent: Type<unknown>;

  /**
   * Render the currently configured example component
   */
  async render() {
    this.exampleComponent = await this.components.get(this.example())?.();
    this.cdRef.markForCheck();
  }
}
