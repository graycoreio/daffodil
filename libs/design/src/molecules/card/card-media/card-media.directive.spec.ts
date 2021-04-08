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

import { DaffCardMediaDirective } from './card-media.directive';

@Component({
  template: `<img src="/" daffCardMedia />`,
})

class WrapperComponent {}

describe('DaffCardMediaDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffCardMediaDirective,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('img[daffCardMedia]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCardMedia]', () => {
    it('should add a class of "daff-card__media" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-card__media': true,
      }));
    });
  });
});
