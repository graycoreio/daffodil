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

import { DaffDisableableDirective } from './disableable.directive';

@Component({
  template: `
		<div daffDisableable
			[disabled]="disabled">
		</div>`,
  imports: [
    DaffDisableableDirective,
  ],
})

class WrapperComponent {
  disabled: boolean;
}

describe('@daffodil/design | DaffDisableableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffDisableableDirective;

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
    de = fixture.debugElement.query(By.css('[daffDisableable]'));
    directive = de.injector.get(DaffDisableableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take disabled as an input', () => {
    expect(directive.disabled).toEqual(wrapper.disabled);
  });

  it('should add a class of "daff-disabled" to the host element when disabled is true', () => {
    wrapper.disabled = true;
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-disabled': true,
    }));
  });

  it('should not add a class of "daff-disabled" to the host element when disabled is false', () => {
    expect(de.classes['daff-disabled']).toBeUndefined();
  });
});
