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

import {
  DAFF_RADIO_COMPONENTS,
  DaffRadioComponent,
} from '@daffodil/design/radio';

@Component({
  template: `
    <daff-radio-set>
      <daff-radio value="visa">Visa</daff-radio>
      <daff-radio value="mastercard">MasterCard</daff-radio>
    </daff-radio-set>
  `,
  imports: [
    DAFF_RADIO_COMPONENTS,
  ],
})
class WrapperComponent { }

describe('@daffodil/design/radio | DaffRadioComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffRadioComponent;
  let de: DebugElement;
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
    de = fixture.debugElement.query(By.css('daff-radio'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have a role of radio', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('radio');
  });

  it('should take a value as an input', () => {
    expect(component.value()).toEqual('visa');
  });

  it('should have a generated id', () => {
    expect(component.id()).toMatch('daff-radio-[0-9]*');
  });
});
