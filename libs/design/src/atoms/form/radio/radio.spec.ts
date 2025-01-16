import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { DaffRadioComponent } from './radio.component';
import { DaffRadioModule } from './radio.module';


@Component({
  template: `
    <daff-radio name="test" value="testValue"></daff-radio>
  `,
  standalone: false,
})
class RadioWrapperComponent { }

describe('DaffRadioComponent', () => {
  let radioWrapper: RadioWrapperComponent;

  let component: DaffRadioComponent;

  let fixture: ComponentFixture<RadioWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioWrapperComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffRadioModule,
      ],
    })
      .compileComponents();
  }));

  describe('daff-radio', () => {

    describe('without a daff-radioset', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(RadioWrapperComponent);
        radioWrapper = fixture.componentInstance;
        component = fixture.debugElement.query(By.css('daff-radio')).componentInstance;
        fixture.detectChanges();
      });

      it('should take a name as an input', () => {
        expect(component.name).toEqual('test');
      });

      it('should create', () => {
        expect(radioWrapper).toBeTruthy();
      });

      it('should take a value as an input', () => {
        expect(component.value).toEqual('testValue');
      });

      it('should have a generated id', () => {
        expect(component.id).toMatch('daff-radio-[0-9]*');
      });
    });
  });
});
