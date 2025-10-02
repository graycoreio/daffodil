import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DAFF_RADIO_COMPONENTS } from '@daffodil/design/radio';

import { DaffRadioComponent } from './radio.component';

@Component({
  template: `
    <daff-radio name="test" value="testValue"></daff-radio>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
  ],
})
class WrapperComponent { }

describe('@daffodil/design/radio | DaffRadioComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        ReactiveFormsModule,
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

  it('should take a name as an input', () => {
    expect(component.name).toEqual('test');
  });

  it('should take a value as an input', () => {
    expect(component.value).toEqual('testValue');
  });

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-radio-[0-9]*');
  });
});
