import { DaffHeroComponent } from './hero/hero.component';
import { DaffHeroBodyDirective } from './hero-body/hero-body.directive';
import { DaffHeroIconDirective } from './hero-icon/hero-icon.directive';
import { DaffHeroSubtitleDirective } from './hero-subtitle/hero-subtitle.directive';
import { DaffHeroTaglineDirective } from './hero-tagline/hero-tagline.directive';
import { DaffHeroTitleDirective } from './hero-title/hero-title.directive';

export const DAFF_HERO_COMPONENTS = <const>[
  DaffHeroComponent,
  DaffHeroIconDirective,
  DaffHeroTaglineDirective,
  DaffHeroTitleDirective,
  DaffHeroSubtitleDirective,
  DaffHeroBodyDirective,
];
