import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
  Type,
} from '@angular/core';

import { DAFF_FLAT_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

export enum DaffDocsExampleViewerViewportOption {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile'
}

@Component({
  selector: 'daff-docs-example-viewer-preview',
  templateUrl: './example-viewer-preview.component.html',
  styleUrl: './example-viewer-preview.component.scss',
  host: {
    class: 'daff-docs-example-viewer-preview',
    '[class.simple]': 'simple()',
  },
  imports: [
    NgComponentOutlet,
    DaffMenuModule,
    DAFF_FLAT_BUTTON_COMPONENTS,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDocsExampleViewerPreviewComponent {
  exampleComponent = input.required<Type<unknown>>();

  simple = input(false);

  readonly viewport = signal(DaffDocsExampleViewerViewportOption.DESKTOP);

  readonly viewportOptions = [
    { value: DaffDocsExampleViewerViewportOption.DESKTOP, label: 'Desktop' },
    { value: DaffDocsExampleViewerViewportOption.TABLET, label: 'Tablet' },
    { value: DaffDocsExampleViewerViewportOption.MOBILE, label: 'Mobile' },
  ];

  readonly viewportLabel = computed(() => this.viewportOptions.find((o) => o.value === this.viewport())?.label);

  selectViewport(value: DaffDocsExampleViewerViewportOption) {
    this.viewport.set(value);
  }
}
