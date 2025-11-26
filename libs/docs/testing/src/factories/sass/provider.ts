import { makeEnvironmentProviders } from '@angular/core';

import { DaffDocsSassParsedColorFactory } from './color.factory';
import { provideDaffDocsSassParsedValueFactories } from './item.factory';
import { DaffDocsSassParsedPaletteFactory } from './palette.factory';

export const provideDaffDocsSassFactories = () => makeEnvironmentProviders([
  provideDaffDocsSassParsedValueFactories<DaffDocsSassParsedPaletteFactory | DaffDocsSassParsedColorFactory>(
    DaffDocsSassParsedPaletteFactory,
    DaffDocsSassParsedColorFactory,
  ),
]);
