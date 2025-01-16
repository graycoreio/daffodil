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

import { DaffCheckboxComponent } from './checkbox.component';
import { DaffCheckboxModule } from './checkbox.module';

@Component({
  template: `
    <daff-checkbox value="testValue"></daff-checkbox>
  `,
  standalone: false,
})
class CheckboxWrapperComponent { }

@Component({
  template: `

<daff-checkbox-set name="toppings">
  <daff-checkbox value="lettuce">Apple</daff-checkbox>
  <daff-checkbox value="tomato">Grape</daff-checkbox>
  <daff-checkbox value="pickle">Peach</daff-checkbox>
</daff-checkbox-set>
  `,
  standalone: false,
})
class CheckboxEmbeddedComponent {}

describe('@daffodil/design | DaffCheckboxComponent', () => {
  let checkboxWrapper: CheckboxWrapperComponent;
  let checkboxEmbedded: CheckboxEmbeddedComponent;

  let component: DaffCheckboxComponent;
  let embeddedComponent: DaffCheckboxComponent;

  let fixture: ComponentFixture<CheckboxWrapperComponent>;
  let embeddedFixture: ComponentFixture<CheckboxEmbeddedComponent>;

  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxWrapperComponent,
        CheckboxEmbeddedComponent,
      ],
      imports: [
        ReactiveFormsModule,
        DaffCheckboxModule,
      ],
    })
      .compileComponents();
  }));

  describe('daff-checkbox', () => {

    describe('within a daff-checkbox-set', () => {
      beforeEach(() => {
        embeddedFixture = TestBed.createComponent(CheckboxEmbeddedComponent);
        checkboxEmbedded = embeddedFixture.componentInstance;
        de = embeddedFixture.debugElement.query(By.css('daff-checkbox'));
        embeddedComponent = embeddedFixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
        embeddedFixture.detectChanges();
      });

      it('should create', () => {
        expect(checkboxEmbedded).toBeTruthy();
      });

      it('should take a value as an input', () => {
        expect(embeddedComponent.value).not.toBeUndefined();
      });

      it('should have a generated id', () => {
        expect(embeddedComponent.id).toMatch('daff-checkbox-[0-9]*');
      });

      it('should have a role of checkbox', () => {
        expect(embeddedComponent.role).toBe('checkbox');
      });
    });

    describe('without a daff-checkbox-set', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(CheckboxWrapperComponent);
        checkboxWrapper = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('daff-checkbox'));
        component = fixture.debugElement.query(By.css('daff-checkbox')).componentInstance;
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(checkboxWrapper).toBeTruthy();
      });

      it('should take a value as an input', () => {
        expect(component.value).toEqual('testValue');
      });

      it('should have a generated id', () => {
        expect(component.id).toMatch('daff-checkbox-[0-9]*');
      });
    });
  });
});
