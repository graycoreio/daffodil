import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  DomSanitizer,
  SafeStyle,
  SafeUrl,
} from '@angular/platform-browser';

const validateProperty = (object: Record<string, any>, prop: string) => {
  if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
    throw new Error(`DaffYoutubePlayerComponent must have a defined ${prop} attribute.`);
  }
};

const validateProperties = (object: Record<string, any>, props: string[]) => {
  const invalidProps = props.filter(prop => {
    try {
      validateProperty(object, prop);
    } catch(e) {
      return true;
    }
    return false;
  });

  if (invalidProps.length) {
    throw new Error(`DaffYoutubePlayerComponent must have the ${invalidProps.join(',')} attributes defined.`);
  }
};

@Component({
  selector: 'daff-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrl: './youtube-player.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.max-width]': 'maxWidth',
  },
})
export class DaffYoutubePlayerComponent implements OnInit {
  /**
   * The URL of the YouTube video.
   */
  @Input() src: SafeUrl;

  /**
   * The title of the YouTube video.
   */
  @Input() title = '';

  private _width: number;

  /**
   * The width of the player.
   */
  @Input()
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
    validateProperty(this, 'width');
  }

  private _height: number;

  /**
   * The height of the player.
   */
  @Input()
  get height(): number {
    return this._height;
  }
  set height(value: number) {
    this._height = value;
    validateProperty(this, 'height');
  }

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @docs-private
   */
  ngOnInit(): void {
    validateProperties(this, ['width', 'height']);
  }

  /**
   * @docs-private
   */
  get _aspectRatio(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.width + ' / ' + this.height);
  }

  /**
   * @docs-private
   */
  get maxWidth(): string {
    return this.width + 'px';
  }
}
