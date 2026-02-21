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
  faCheck,
  faChevronDown,
  faChevronUp,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';

import { DaffDocsDesignExample } from '@daffodil/docs-utils';

type Tab = 'script' | 'template';

@Component({
  selector: 'daffio-example-viewer-code',
  templateUrl: './example-viewer-code.component.html',
  styleUrl: './example-viewer-code.component.scss',
  host: {
    class: 'daffio-example-viewer-code',
  },
  imports: [
    FaIconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaffioExampleViewerCodeComponent implements OnDestroy {
  private readonly ngZone = inject(NgZone);
  private copyTimeoutId?: ReturnType<typeof setTimeout>;

  readonly faChevronDown = faChevronDown;
  readonly faChevronUp = faChevronUp;
  readonly faCopy = faCopy;
  readonly faCheck = faCheck;

  readonly codeEl = viewChild<ElementRef<HTMLElement>>('codeEl');
  readonly copied = signal(false);
  readonly fullCode = signal(false);
  readonly tab = signal<Tab>('template');

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

  get copyIcon() {
    return this.copied() ? faCheck : faCopy;
  }

  async copyCode() {
    const code = this.codeEl()?.nativeElement.textContent || '';
    try {
      await navigator.clipboard.writeText(code);
      this.copied.set(true);
      clearTimeout(this.copyTimeoutId);
      this.ngZone.runOutsideAngular(() => {
        this.copyTimeoutId = setTimeout(() => {
          this.ngZone.run(() => this.copied.set(false));
        }, 1500);
      });
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
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
