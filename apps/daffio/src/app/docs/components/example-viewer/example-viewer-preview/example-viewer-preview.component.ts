import { NgComponentOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
  Type,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faDesktop,
  faMobileScreenButton,
  faTabletScreenButton,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'daffio-example-viewer-preview',
  templateUrl: './example-viewer-preview.component.html',
  styleUrl: './example-viewer-preview.component.scss',
  host: {
    class: 'daffio-example-viewer-preview',
  },
  imports: [
    NgComponentOutlet,
    FaIconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioExampleViewerPreviewComponent {
  viewportOptions = [
    { value: 'desktop', label: 'Toggle full screen', icon: faDesktop },
    { value: 'tablet', label: 'Toggle tablet view', icon: faTabletScreenButton },
    { value: 'mobile', label: 'Toggle mobile view', icon: faMobileScreenButton },
  ];

  exampleComponent = input.required<Type<unknown>>();

  viewport = signal<'desktop' | 'tablet' | 'mobile'>('desktop');

  viewportClass = computed(() => this.viewport() !== 'desktop' ? this.viewport() : '');
}
