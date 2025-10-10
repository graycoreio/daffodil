import { Component } from '@angular/core';
import {
  TestBed,
  waitForAsync,
  ComponentFixture,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import {
  DAFF_CHECKBOX_COMPONENTS,
  DaffCheckboxComponent,
} from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox aria-label="testLabel" aria-labelledby="testParent"></daff-checkbox>
  `,
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
    ReactiveFormsModule,
  ],
})
class WrapperComponent { }

describe('@daffodil/design/checkbox | Accessibility', () => {
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a role of checkbox', () => {
    expect(component.role).toBe('checkbox');
  });

  it('should have a aria-label', () => {
    expect(component.label).toBe('testLabel');
  });

  it('should have a aria-labelledby', () => {
    expect(component.labeledBy).toBe('testParent');
  });

});
