import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffCheckboxComponent } from '@daffodil/design/checkbox';

@Component({
  template: `
    <daff-checkbox value="testValue"></daff-checkbox>
  `,
  imports: [
    DaffCheckboxComponent,
    ReactiveFormsModule,
  ],
})
class WrapperComponent { }

describe('@daffodil/design/checkbox | DaffCheckboxComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffCheckboxComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;

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
    de = fixture.debugElement.query(By.css('daff-checkbox'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should take a value as an input', () => {
    expect(component.value).toEqual('testValue');
  });

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-checkbox-[0-9]*');
  });
});
