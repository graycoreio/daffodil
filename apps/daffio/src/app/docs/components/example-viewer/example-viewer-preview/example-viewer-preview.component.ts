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

export enum DaffioExampleViewerViewportOption {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile'
}

@Component({
  selector: 'daffio-example-viewer-preview',
  templateUrl: './example-viewer-preview.component.html',
  styleUrl: './example-viewer-preview.component.scss',
  host: {
    class: 'daffio-example-viewer-preview',
    '[class.simple]': 'simple()',
  },
  imports: [
    NgComponentOutlet,
    DaffMenuModule,
    DAFF_FLAT_BUTTON_COMPONENTS,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioExampleViewerPreviewComponent {
  exampleComponent = input.required<Type<unknown>>();

  simple = input(false);

  readonly viewport = signal(DaffioExampleViewerViewportOption.DESKTOP);

  readonly viewportOptions = [
    { value: DaffioExampleViewerViewportOption.DESKTOP, label: 'Desktop' },
    { value: DaffioExampleViewerViewportOption.TABLET, label: 'Tablet' },
    { value: DaffioExampleViewerViewportOption.MOBILE, label: 'Mobile' },
  ];

  readonly viewportLabel = computed(() => this.viewportOptions.find((o) => o.value === this.viewport())?.label);

  selectViewport(value: DaffioExampleViewerViewportOption) {
    this.viewport.set(value);
  }
}
