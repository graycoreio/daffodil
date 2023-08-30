import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Inject,
  Injectable,
} from '@angular/core';

import { DaffBreakpoints } from '@daffodil/design';

import {
  DaffToastOptions,
  DaffToastPosition,
  DAFF_TOAST_OPTIONS,
} from '../options/daff-toast-options';

@Injectable()
export class DaffToastPositionService {

  constructor(@Inject(DAFF_TOAST_OPTIONS) private options: DaffToastOptions, private mediaQuery: BreakpointObserver) {
    this._config = options.position;
  }

  private _config: DaffToastPosition;
  private _position: DaffToastPosition;

  get config(): DaffToastPosition {
    return this.mediaQuery.isMatched(DaffBreakpoints.MOBILE)
      ? this._position ?? this._config
      : <DaffToastPosition>{ vertical: 'bottom', horizontal: 'center' };
  }

  set config(val: DaffToastPosition) {
    this._config = val;
  }

  setPosition(position: DaffToastPosition) {
    this._position = position;
  }
}
