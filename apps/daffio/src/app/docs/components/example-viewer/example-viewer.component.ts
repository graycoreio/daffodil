import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Resource,
  resource,
  Type,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { DaffDocsDesignExample } from '@daffodil/docs-utils';

import { DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP } from './example-components-map.token';
import { DaffioExampleViewerCodeComponent } from './example-viewer-code/example-viewer-code.component';
import { DaffioExampleViewerPreviewComponent } from './example-viewer-preview/example-viewer-preview.component';
import { DAFFIO_DOCS_DESIGN_SECTION } from '../../design/services/index.service';
import { DaffioDocsService } from '../../services/docs.service';

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
  imports: [
    DaffioExampleViewerPreviewComponent,
    DaffioExampleViewerCodeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioExampleViewerComponent {
  private readonly docsService = inject(DaffioDocsService);
  private readonly components = inject(DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP);

  /**
   * Whether to show the source files.
   */
  simple = input(false);

  /**
   * The identifier of the example component to render.
   * Must match a key in {@link DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP}.
   */
  example = input.required<string>();

  private readonly section = inject(DAFFIO_DOCS_DESIGN_SECTION);


  /**
   * The source files of the example.
   */
  readonly sourceFiles: Resource<DaffDocsDesignExample> = rxResource({
    params: () => ({ path: `docs/${this.section}/examples/${this.example()}` }),
    stream: ({ params }) => this.docsService.get<any>(params.path),
  });

  /**
   * The dynamically loaded component type to render.
   */
  readonly exampleComponent: Resource<Type<unknown>> = resource({
    params: () => ({ example: this.example() }),
    loader: ({ params }) => this.components.get(params.example)?.(),
  });
}
