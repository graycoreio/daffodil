import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
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
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faCopy = faCopy;
  faCheck = faCheck;

  fullCode = false;

  toggleFullCode() {
    this.fullCode = !this.fullCode;
  }

  codeEl = viewChild<ElementRef<HTMLElement>>('codeEl');
  copied = signal(false);
  private copyTimeoutId?: ReturnType<typeof setTimeout>;
  private ngZone = inject(NgZone);

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

  ngOnDestroy() {
    if (this.copyTimeoutId) {
      clearTimeout(this.copyTimeoutId);
    }
  }
}
