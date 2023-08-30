import {
  GlobalPositionStrategy,
  PositionStrategy,
} from '@angular/cdk/overlay';

import { DaffToastPosition } from '../options/daff-toast-options';

export const createPositionStrategy = (position: DaffToastPosition): PositionStrategy => {
  const strat = new GlobalPositionStrategy();

  switch ( position.horizontal ) {
    case 'left':
      strat.left('48px');
      break;
    case 'right':
      strat.right('48px');
      break;
    case 'center':
      strat.centerHorizontally();
      break;
    default:
      strat.right('48px');
  }

  switch(position.vertical) {
    case 'top':
      strat.top('80px');
      break;
    case 'bottom':
      strat.bottom('48px');
      break;
    default:
      strat.top('80px');
  }

  return strat;
};
