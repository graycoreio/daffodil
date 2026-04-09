import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  NgZone,
  OnDestroy,
  signal,
  viewChild,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faEye,
  faEyeSlash,
} from '@fortawesome/free-regular-svg-icons';

import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DaffDocsDesignExample } from '@daffodil/docs-utils';

export type DaffioExampleViewerTab = 'script' | 'template';

@Component({
  selector: 'daff-docs-example-viewer-code',
  templateUrl: './example-viewer-code.component.html',
  styleUrl: './example-viewer-code.component.scss',
  host: {
    class: 'daff-docs-example-viewer-code',
  },
  imports: [
    FaIconComponent,
    DAFF_BUTTON_COMPONENTS,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffDocsExampleViewerCodeComponent implements OnDestroy {
  private readonly ngZone = inject(NgZone);
  private copyTimeoutId?: ReturnType<typeof setTimeout>;

  readonly faEyeSlash = faEyeSlash;
  readonly faEye = faEye;

  readonly codeEl = viewChild<ElementRef<HTMLElement>>('codeEl');

  readonly fullCode = signal(false);
  readonly copied = signal(false);
  readonly tab = signal<DaffioExampleViewerTab>('template');

  source = input.required<DaffDocsDesignExample>();

  readonly templateSource = computed(() =>
    this.source()?.files.find(({ name }) => name.endsWith('.html')),
  );

  readonly scriptSource = computed(() =>
    this.source()?.files.find(({ name }) => name.endsWith('.ts')),
  );

  readonly visibleCode = computed(() => {
    switch (this.tab()) {
      case 'template':
        return this.templateSource();

      case 'script':
      default:
        return this.scriptSource();
    }
  });

  showFullCode() {
    this.fullCode.set(true);
  }

  toggleFullCode() {
    this.fullCode.update((val) => !val);
  }

  ngOnDestroy() {
    if (this.copyTimeoutId) {
      clearTimeout(this.copyTimeoutId);
    }
  }
}
