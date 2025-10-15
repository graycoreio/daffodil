import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffRadioComponent } from '@daffodil/design/radio';

@Component({
  template: `
    <daff-radio name="test" value="testValue" aria-labelledby="user" aria-label="test"></daff-radio>
  `,
  imports: [
    DaffRadioComponent,
    ReactiveFormsModule,

  ],
})

class WrapperComponent { }

describe('@daffodil/design/radio | DaffRadioComponent | Accessibility', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;

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
    component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a role of radio', () => {
   fixture.detectChanges();
   const radioDebugElement = fixture.debugElement.query(By.css('daff-radio'));
   const roleAttribute = radioDebugElement.nativeElement.getAttribute('role');
   expect(roleAttribute).toBe('radio');
  });

  it('should take `label` as an input', () => {
    expect(component.label).toBe('test');
  });

  it('should take `aria-labelledby` as an input', () => {
    expect(component.labelledby).toBe('user');
  });
});
