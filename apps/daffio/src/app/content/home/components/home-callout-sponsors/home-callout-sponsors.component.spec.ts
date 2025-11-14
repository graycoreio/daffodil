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
import { provideRouter } from '@angular/router';

import { DaffioHomeCalloutSponsorsComponent } from './home-callout-sponsors.component';

@Component({
  template: `<daffio-home-callout-sponsors></daffio-home-callout-sponsors>`,
  imports: [DaffioHomeCalloutSponsorsComponent],
})
class WrapperComponent {}

describe('DaffioHomeCalloutSponsorsComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioHomeCalloutSponsorsComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        provideRouter([]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-home-callout-sponsors'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-home-callout-sponsors" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-home-callout-sponsors': true,
    }));
  });
});
