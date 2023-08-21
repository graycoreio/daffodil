import {
  GlobalPositionStrategy,
  PositionStrategy,
} from '@angular/cdk/overlay';

import { DaffToastPosition } from '../options/daff-toast-options';


export const createPositionStrategy = (position: DaffToastPosition): PositionStrategy => {
  const strat = new GlobalPositionStrategy();
  Object.keys(position).forEach((key) => {
    switch(key) {
      case 'top':
        strat.top(position[key]);
        break;
      case 'bottom':
        strat.bottom(position[key]);
        break;
      case 'left':
        strat.left(position[key]);
        break;
      case 'right':
        strat.right(position[key]);
        break;
      case 'verticallyCenter':
        strat.centerVertically(position.verticallyCenter);
        break;
      case 'horizontallyCenter':
        strat.centerHorizontally(position.horizontallyCenter);
        break;
    }
  });

  return strat;
};
