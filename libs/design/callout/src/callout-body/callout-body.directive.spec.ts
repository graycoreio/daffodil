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

import { DaffCalloutBodyDirective } from './callout-body.directive';

@Component({
  template: `
    <h3 daffCalloutBody>Lorem Ipsum</h3>
  `,
  imports: [
    DaffCalloutBodyDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/callout | DaffCalloutBodyDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCalloutBody]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutBody]',() => {
    it('should add a class of `daff-callout__body` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__body')).toEqual(true);
    });
  });
});
