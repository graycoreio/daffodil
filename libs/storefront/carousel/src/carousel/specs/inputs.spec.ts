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
      <div *daffCarouselItem>Some Item</div>
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

describe('@daffodil/storefront/carousel | DaffSfCarouselComponent | Inputs', () => {
  let wrapper: WrapperComponent;
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
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should allow `spaceBetween` to be customized', () => {
    wrapper.options = {
      spaceBetween: 20,
    };

    fixture.detectChanges();
    expect(wrapper.carousel.options.spaceBetween).toEqual(20);
  });

  it('should allow `slidesPerView` to be customized', () => {
    wrapper.options = {
      slidesPerView: 1,
    };

    fixture.detectChanges();
    expect(wrapper.carousel.options.slidesPerView).toEqual(1);
  });

});
