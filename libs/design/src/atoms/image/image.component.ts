import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, HostBinding, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const validateProperty = (object: Object, prop: string) => {
  if (object[prop] === null || object[prop] === undefined || object[prop] === '') {
    throw new Error(`DaffImageComponent must have a defined ${prop} attribute.`)
  } 
}

const validateProperties = (object: Object, props: string[]) => {
  const invalidProps = props.filter(prop => {
    try {
      validateProperty(object, prop);
    }
    catch(e) {
      return true;
    }
    return false;
  })

  if (invalidProps.length) {
    throw new Error(`DaffImageComponent must have the ${invalidProps.join(',')} attributes defined.`)
  }
}

@Component({
  selector: 'daff-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaffImageComponent implements OnInit {

  @Output() load: EventEmitter<void> = new EventEmitter();
  
  private _src: string;

  @Input()
  get src(): string { return this._src; }
  set src(value: string) {
    this._src = value;
    validateProperty(this, 'src');
  }

  private _alt: string;

  @Input()
  get alt(): string { return this._alt; }
  set alt(value: string) {
    this._alt = value;
    validateProperty(this, 'alt');
  }

  private _width: number;

  @Input()
  get width(): number { return this._width; }
  set width(value: number) {
    this._width = value;
    validateProperty(this, 'width');
  }

  private _height: number;

  @Input()
  get height(): number { return this._height; }
  set height(value: number) {
    this._height = value;
    validateProperty(this, 'height');
  }

  ngOnInit(): void {
    validateProperties(this, ['src', 'alt', 'width', 'height'])
  }

  constructor(private sanitizer: DomSanitizer) {}

  get paddingTop(): any {
    if (!this.height || !this.width ) {
      return undefined;
    }
    
    return this.sanitizer.bypassSecurityTrustStyle('calc(' + this.height + ' / ' + this.width + ' * 100%)');
  }

  @HostBinding('style.max-width') get maxWidth(): string {
    return this.width + 'px';
  }
}
