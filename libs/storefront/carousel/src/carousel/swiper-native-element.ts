import { Swiper } from 'swiper/types';

export interface SwiperNativeElement {
  initialize: () => void;
  swiper?: Swiper;
  classList: HTMLElement['classList'];
}
