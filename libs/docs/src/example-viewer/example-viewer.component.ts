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

import { DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP } from './component-map';
import { DaffDocsExampleViewerCodeComponent } from './example-viewer-code/example-viewer-code.component';
import { DaffDocsExampleViewerPreviewComponent } from './example-viewer-preview/example-viewer-preview.component';
import { DAFF_DOCS_EXAMPLE_SERVICE } from './service/example-docs.service';

/**
 * A component that dynamically loads and renders example components.
 */
@Component({
  selector: 'daff-docs-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrl: './example-viewer.component.scss',
  host: {
    class: 'daff-docs-example-viewer',
    '[class.simple]': 'simple()',
  },
  imports: [
    DaffDocsExampleViewerPreviewComponent,
    DaffDocsExampleViewerCodeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDocsExampleViewerComponent {
  private readonly docsService = inject(DAFF_DOCS_EXAMPLE_SERVICE);
  private readonly components = inject(DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP);

  /**
   * Whether to show the source files.
   */
  simple = input(false);

  /**
   * The identifier of the example component to render.
   * Must match a key in {@link DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP}.
   */
  example = input.required<string>();


  /**
   * The source files of the example.
   */
  readonly sourceFiles: Resource<DaffDocsDesignExample | undefined> = rxResource({
    params: () => ({ example: this.example() }),
    stream: ({ params }) => this.docsService.get(params.example),
  });


  /**
   * The dynamically loaded component type to render.
   */
  readonly exampleComponent: Resource<Type<unknown> | undefined> = resource({
    params: () => ({ example: this.example() }),
    loader: ({ params }) => this.components.get(params.example)?.() ?? Promise.resolve(undefined),
  });
}
