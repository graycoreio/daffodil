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

import { DaffioHomeCalloutPlatformsComponent } from './home-callout-platforms.component';

@Component({
  template: `<daffio-home-callout-platforms></daffio-home-callout-platforms>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffioHomeCalloutPlatformsComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioHomeCalloutPlatformsComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioHomeCalloutPlatformsComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-home-callout-platforms'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-home-callout-platforms" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-home-callout-platforms': true,
    }));
  });
});
