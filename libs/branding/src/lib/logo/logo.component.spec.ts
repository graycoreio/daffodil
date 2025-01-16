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

import { DaffLogoComponent } from './logo.component';

@Component({
  template: `<daff-branding-logo></daff-branding-logo>`,
  standalone: false,
})
class WrapperComponent {}

describe('DaffLogoComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffLogoComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffLogoComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-branding-logo'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-branding-logo" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-branding-logo': true,
    }));
  });
});
