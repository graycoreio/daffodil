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

import { DaffCalloutSubtitleDirective } from './callout-subtitle.directive';

@Component({
  template: `
    <p daffCalloutSubtitle>Lorem Ipsum</p>
  `,
  imports: [
    DaffCalloutSubtitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/callout | DaffCalloutSubtitleDirective', () => {
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
    de = fixture.debugElement.query(By.css('[daffCalloutSubtitle]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffCalloutSubtitle]',() => {
    it('should add a class of `daff-callout__subtitle` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-callout__subtitle')).toEqual(true);
    });
  });
});
