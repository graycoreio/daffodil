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

import { DaffLinkSetItemComponent } from './link-set-item.component';

@Component ({
  template: `<a daff-link-set-item href="#"></a>`,
  imports: [
    DaffLinkSetItemComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/link-set | DaffLinkSetItemComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;

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
    de = fixture.debugElement.query(By.css('a[daff-link-set-item]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daff-link-set-item]', () => {
    it('should add a class of "daff-link-set__item" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-link-set__item': true,
      }));
    });
  });
});
