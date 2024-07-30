import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  OnInit,
  Output,
  HostBinding,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { DaffSkeletonableDirective } from '@daffodil/design';
import { daffThumbnailCompatToken } from '@daffodil/design/media-gallery';

const validateProperty = (object: Record<string, any>, prop: string) => {
  if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
    throw new Error(`DaffImageComponent must have a defined ${prop} attribute.`);
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
    throw new Error(`DaffImageComponent must have the ${invalidProps.join(',')} attributes defined.`);
  }
};

@Component({
  selector: 'daff-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
			 provide: daffThumbnailCompatToken, useExisting: DaffImageComponent,
    },
  ],
  hostDirectives: [{
    directive: DaffSkeletonableDirective,
    inputs: ['skeleton'],
  }],
})
export class DaffImageComponent implements OnInit {

  private _src: string;

  @Input()
  get src(): string {
	  return this._src;
  }
  set src(value: string) {
    this._src = value;
    validateProperty(this, 'src');
  }

  private _alt: string;

  @Input()
  get alt(): string {
    return this._alt;
  }
  set alt(value: string) {
    this._alt = value;
    validateProperty(this, 'alt');
  }

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

  // TODO: rename event to not collide with native event (unless that's intentional)
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() load: EventEmitter<void> = new EventEmitter();

  /**
   * @docs-private
   */
  ngOnInit(): void {
	  validateProperties(this, ['src', 'alt', 'width', 'height']);
  }

  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @docs-private
   */
  get _paddingTop(): any {
	  if (!this.height || !this.width ) {
	    return undefined;
	  }

	  return this.sanitizer.bypassSecurityTrustStyle('calc(' + this.height + ' / ' + this.width + ' * 100%)');
  }

  /**
   * @docs-private
   */
  @HostBinding('style.max-width') get maxWidth(): string {
	  return this.width + 'px';
  }
}
