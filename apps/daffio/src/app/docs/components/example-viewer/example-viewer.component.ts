import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
  Type,
} from '@angular/core';

import { CONTENT_COMPONENT_MAP } from './example-components-map';

/**
 * A component that dynamically loads and renders example components.
 */
@Component({
  template: `
	 	<div class="example-viewer">
      <ng-container *ngComponentOutlet="exampleComponent" />
    </div>
	`,
  imports: [NgComponentOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioExampleViewerComponent {
  /**
   * The identifier of the example component to render.
   * Must match a key in {@link CONTENT_COMPONENT_MAP}.
   */
  example = input.required<string>();

  components = inject(CONTENT_COMPONENT_MAP);

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
