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

import { DaffCalloutIconDirective } from './callout-icon.directive';

@Component({
  template: `
    <h3 daffCalloutIcon>Lorem Ipsum</h3>
  `,
  imports: [
    DaffCalloutIconDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/callout | DaffCalloutIconDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCalloutIcon]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutIcon]',() => {
    it('should add a class of `daff-callout__icon` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__icon')).toEqual(true);
    });
  });
});
