import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCheck,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';

import { DAFF_CALLOUT_COMPONENTS } from '@daffodil/design/callout';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'daffio-home-callout-commerce',
  templateUrl: './home-callout-commerce.component.html',
  styleUrls: ['./home-callout-commerce.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'daffio-home-callout-commerce',
  },
  imports: [
    DAFF_CALLOUT_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    FaIconComponent,
    ClipboardModule,
  ],
})

export class DaffioHomeCalloutCommerceComponent implements AfterViewInit {
  @ViewChild('commerceVideo') videoRef!: ElementRef<HTMLVideoElement>;

  readonly command = 'npx ng add @daffodil/commerce';

  isCopied = signal(false);
  private timeoutId: any;

  constructor() {
    effect(() => {
      if (this.isCopied()) {
        this.timeoutId = setTimeout(() => {
          this.isCopied.set(false);
        }, 1000);
      }
    });
  }

  get icon() {
    return this.isCopied() ? faCheck : faCopy;
  }

  onCopySuccess(success: boolean) {
    if (success) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.isCopied.set(true);
    }
  }

  ngAfterViewInit(): void {
    const media = this.videoRef?.nativeElement;
    if (media) {
      media.muted = true;
      media.play().catch(() => {});
    }
  }
}
