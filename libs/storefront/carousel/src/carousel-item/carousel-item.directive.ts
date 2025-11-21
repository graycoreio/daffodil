import { Directive } from '@angular/core';

@Directive({
  selector: '[daffSfCarouselItem]',
  host: {
    class: 'daff-sf-carousel-item',
  },
})
export class DaffSfCarouselItemDirective  {}
