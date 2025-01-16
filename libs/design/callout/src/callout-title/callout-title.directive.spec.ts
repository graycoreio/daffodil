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

import { DaffCalloutTitleDirective } from './callout-title.directive';

@Component({
  template: `
    <h3 daffCalloutTitle>Lorem Ipsum</h3>
  `,
  imports: [
    DaffCalloutTitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/callout | DaffCalloutTitleDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCalloutTitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutTitle]',() => {
    it('should add a class of `daff-callout__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__title')).toEqual(true);
    });
  });
});
