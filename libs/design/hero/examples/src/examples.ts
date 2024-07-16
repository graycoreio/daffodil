import { provideDaffDocsExampleComponents } from '@daffodil/documentation';

import { CompactHeroComponent } from './compact-hero/compact-hero.component';
import { HeroTextAlignmentComponent } from './hero-text-alignment/hero-text-alignment.component';
import { HeroThemingComponent } from './hero-theming/hero-theming.component';
import { HeroWithGridComponent } from './hero-with-grid/hero-with-grid.component';


export const HERO_EXAMPLES = [
  HeroThemingComponent,
  HeroTextAlignmentComponent,
  HeroWithGridComponent,
  CompactHeroComponent,
];

export const provideDaffDesignHeroExamples = () =>
  provideDaffDocsExampleComponents(...HERO_EXAMPLES);
