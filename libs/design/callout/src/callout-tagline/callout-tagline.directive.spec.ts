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

import { DaffCalloutTaglineDirective } from './callout-tagline.directive';

@Component({
  template: `
    <h3 daffCalloutTagline>Lorem Ipsum</h3>
  `,
  imports: [
    DaffCalloutTaglineDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/callout | DaffCalloutTaglineDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCalloutTagline]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutTagline]',() => {
    it('should add a class of `daff-callout__tagline` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__tagline')).toEqual(true);
    });
  });
});
