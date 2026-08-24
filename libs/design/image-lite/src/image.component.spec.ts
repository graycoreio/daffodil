import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_IMAGE_LITE_COMPONENTS,
  DaffImageLiteComponent,
} from '@daffodil/design/image-lite';

@Component({
  template: `
    <img daff-image [skeleton]="skeleton()">`,
  imports: [
    DAFF_IMAGE_LITE_COMPONENTS,
  ],
})

class WrapperComponent {
  skeleton = signal(false);
}

describe('@daffodil/design/image | DaffImageLiteComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffImageLiteComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('img[daff-image]'));
    component = de.componentInstance;
  });

  it('should take skeleton as an input', () => {
    wrapper.skeleton.set(true);
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-skeleton')).toEqual(true);
  });
});
