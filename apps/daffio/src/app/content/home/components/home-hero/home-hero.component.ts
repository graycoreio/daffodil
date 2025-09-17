import { ClipboardModule } from '@angular/cdk/clipboard';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  effect,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { DAFF_BRANDING_CONSTANTS } from '@daffodil/branding';
import { DAFF_BUTTON_COMPONENTS } from '@daffodil/design/button';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';
import { DAFF_HERO_COMPONENTS } from '@daffodil/design/hero';
import { DAFF_IMAGE_COMPONENTS } from '@daffodil/design/image';

@Component({
  selector: 'daffio-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DAFF_HERO_COMPONENTS,
    DAFF_IMAGE_COMPONENTS,
    DAFF_CONTAINER_COMPONENTS,
    DAFF_BUTTON_COMPONENTS,
    ClipboardModule,
    FaIconComponent,
  ],
})

export class DaffioHomeHeroComponent {
  repoLink = DAFF_BRANDING_CONSTANTS.REPO_URL;
  demoLink = DAFF_BRANDING_CONSTANTS.DEMO_URL;

  command = 'npx ng add @daffodil/commerce';

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
}
