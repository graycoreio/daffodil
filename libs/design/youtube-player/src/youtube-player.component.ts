import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import {
  DomSanitizer,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';

const validateInput = (prop: string) => <T>(value: T): T => {
  if (value === null || value === undefined || <unknown>value === '') {
    throw new Error(`DaffYoutubePlayerComponent must have a defined ${prop} attribute.`);
  }

  return value;
};

@Component({
  selector: 'daff-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.max-width]': 'width() + "px"',
  },
})
export class DaffYoutubePlayerComponent {
  /**
   * The URL of the YouTube video.
   */
  src = input<SafeUrl>();

  /**
   * The title of the YouTube video.
   */
  title = input('');

  /**
   * The width of the player.
   */
  width = input.required<number, number>({ transform: validateInput('width') });

  /**
   * The height of the player.
   */
  height = input.required<number, number>({ transform: validateInput('height') });

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @docs-private
   */
  _aspectRatio = computed<SafeStyle>(
    () => this.sanitizer.bypassSecurityTrustStyle(
      this.width() + ' / ' + this.height(),
    ),
  );
}
