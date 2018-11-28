import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'daff-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'daff-hero',
    '[class.daff-hero--centered]':'layout === "centered"',
    '[class.daff-hero--grid]':'layout === "grid"',
    '[class.daff-hero--fullscreen]':'size === "fullscreen"',
    '[class.daff-hero--small]':'size === "small"',
    '[class.daff-hero--primary]':'color === "primary"',
    '[class.daff-hero--accent]':'color === "accent"',
    '[class.daff-hero--gray]':'color === "gray"',
    '[class.daff-hero--black]':'color === "black"',
    '[class.daff-hero--white]':'color === "white"',
  },
})
export class DaffHeroComponent {

  @Input() layout: string;
  @Input() size: string;
  @Input() color: string;
  
}
