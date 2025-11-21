

import { NgTemplateOutlet } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  contentChildren,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  Input,
  TemplateRef,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper } from 'swiper/types';

import { SwiperNativeElement } from './swiper-native-element';
import { DaffSfCarouselItemDirective } from '../carousel-item/carousel-item.directive';
import { DaffSfCarouselOptions } from '../options';
import { DAFF_SF_CAROUSEL_INIT } from '../provider';

@Component({
  selector: 'daff-sf-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    ngSkipHydration: 'true',
    class: 'daff-sf-carousel',
    tabindex: '0',
  },
  imports: [
    FaIconComponent,
    NgTemplateOutlet,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})
export class DaffSfCarouselComponent {
  readonly faChevronRight = faChevronRight;
  readonly faChevronLeft = faChevronLeft;

  private _options: DaffSfCarouselOptions;

  items = contentChildren(DaffSfCarouselItemDirective, { read: TemplateRef<any> });

  swiperElement = viewChild<unknown,ElementRef<SwiperNativeElement>>('swiperElement', { read: ElementRef<any> });

  swiperRef: Swiper = undefined;

  private initCarousel = inject(DAFF_SF_CAROUSEL_INIT);

  constructor(private cdr: ChangeDetectorRef) {
    this.options = {};

    afterNextRender({
      write: () => {
        Object.assign(this.swiperElement().nativeElement, this.options);
        this.swiperElement().nativeElement.initialize();
        this.swiperElement().nativeElement.classList.add('swiper-initialized');
        this.swiperRef = this.swiperElement().nativeElement.swiper;
        this.swiperRef.on('slideChange', () => {
          this.cdr.detectChanges();
        });
        // Force Angular to update the bindings

        this.cdr.detectChanges();
      },
    });

    effect(() => {
      const currentSlides = this.items();
      const swiper = this.swiperRef;
      if (!swiper) {
        return;
      };

      queueMicrotask(() => {
        swiper.update();
        this.cdr.detectChanges();
      });
    });
  }

  @Input()
  get options(): DaffSfCarouselOptions {
    return {
      ...{
        slidesPerView: 'auto',
        spaceBetween: 16,
        keyboard: true,
      },
      ...this._options,
    };
  }
  set options(val: DaffSfCarouselOptions)  {
    this._options = val;
  }
}
