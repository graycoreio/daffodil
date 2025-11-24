import {
  Component,
  ViewChild,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  DaffSfCarouselComponent,
  DaffSfCarouselOptions,
} from '@daffodil/storefront/carousel';

@Component({
  template: `
		<daff-sf-carousel [options]="options">
			<div *daffSfCarouselItem>Some Item</div>
		</daff-sf-carousel>
	`,
  imports: [
    DaffSfCarouselComponent,
  ],
})
class WrapperComponent {
  options: DaffSfCarouselOptions = {};

  @ViewChild(DaffSfCarouselComponent) carousel: DaffSfCarouselComponent;
}

describe('@daffodil/storefront/carousel | DaffSfCarouselComponent | Defaults', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use a `swiper-container` element inside the component', () => {
    const swiperElement = fixture.nativeElement.querySelector('swiper-container');
    expect(swiperElement).toBeTruthy();
  });

  it('should set the swiper `slidesPerView` default to auto', () => {
    expect(component.carousel.options.slidesPerView).toEqual('auto');
  });

  it('should set the swiper `spaceBetween` default to auto', () => {
    expect(component.carousel.options.spaceBetween).toEqual(16);
  });
});
