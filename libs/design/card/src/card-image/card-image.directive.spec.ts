import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffCardImageDirective } from './card-image.directive';

@Component({
  template: `<img src="/" daffCardImage />`,
  imports: [
    DaffCardImageDirective,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/card | DaffCardImageDirective', () => {
  let wrapper: WrapperComponent;
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
    de = fixture.debugElement.query(By.css('img[daffCardImage]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardImage]', () => {
    it('should add a class of "daff-card__image" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__image': true,
      }));
    });
  });
});
