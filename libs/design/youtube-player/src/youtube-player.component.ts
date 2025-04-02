import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
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
})
export class DaffYoutubePlayerComponent implements OnInit {
  @Input() src: SafeUrl;
  @Input() title = '';

  private _width: number;

  @Input()
  get width(): number {
    return this._width;
  }
  set width(value: number) {
    this._width = value;
    validateProperty(this, 'width');
  }

  private _height: number;

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

  get _aspectRatio(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.width + ' / ' + this.height);
  }

  @HostBinding('style.max-width') get maxWidth(): string {
    return this.width + 'px';
  }
}
