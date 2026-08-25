import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  computed,
} from '@angular/core';
import {
  DomSanitizer,
  SafeStyle,
} from '@angular/platform-browser';

import { DaffSkeletonableDirective } from '@daffodil/design';

const validateInput = (prop: string) => <T>(value: T): T => {
  if (value === null || value === undefined || <unknown>value === '') {
    throw new Error(`DaffImageComponent must have a defined ${prop} attribute.`);
  }

  return value;
};

/**
 * @deprecated in favor of {@link DaffImageLiteComponent}. Deprecated in version 0.95.0. Will be removed in version 0.98.0.
 */
@Component({
  selector: 'daff-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
  host: {
    '[style.max-width]': 'width() + "px"',
    '[style.aspect-ratio]': '_aspectRatio()',
  },
  imports: [
    NgOptimizedImage,
  ],
})
export class DaffImageComponent {
  /**
   * The URL of the image.
   */
  src = input.required<string, string>({ transform: validateInput('src') });

  /**
   * The alternate text for the image.
   */
  alt = input.required<string, string>({ transform: validateInput('alt') });

  /**
   * The width of the image.
   */
  width = input.required<number, number>({ transform: validateInput('width') });

  /**
   * The height of the image.
   */
  height = input.required<number, number>({ transform: validateInput('height') });

  /**
   * Whether the image should be treated as a priority image for loading.
   * Priority images are loaded eagerly and not lazy-loaded.
   */
  priority = input(false);

  /**
   * Emits when the image has loaded.
   */
  loaded = output<void>();

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @docs-private
   */
  _paddingTop = computed(() => {
    if (!this.height() || !this.width() ) {
      return undefined;
    }

    return this.sanitizer.bypassSecurityTrustStyle(
      'calc(' + this.height() + ' / ' + this.width() + ' * 100%)',
    );
  });

  /**
   * @docs-private
   *
   * The aspect ratio of an image, based on the width and height set by the user.
   */
  _aspectRatio = computed<SafeStyle>(
    () => this.sanitizer.bypassSecurityTrustStyle(
      this.width() + ' / ' + this.height(),
    ),
  );
}
