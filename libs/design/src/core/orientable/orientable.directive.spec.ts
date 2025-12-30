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

import {
  DaffOrientation,
  DaffOrientableDirective,
} from '@daffodil/design';

@Component({
  template: `
		<div daffOrientable [orientation]="orientation"></div>`,
  imports: [
    DaffOrientableDirective,
  ],
})

class WrapperComponent {
  orientation: DaffOrientation;
}

describe('@daffodil/design | DaffOrientableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffOrientableDirective;

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
    de = fixture.debugElement.query(By.css('[daffOrientable]'));

    directive = de.injector.get(DaffOrientableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take orientation as an input', () => {
    expect(directive.orientation).toEqual(wrapper.orientation);
  });

  it('should add a class of .daff-horizontal to the host element if orientation is set to horizontal', () => {
    wrapper.orientation = 'horizontal';
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-horizontal': true,
    }));
  });

  it('should add a class of .daff-vertical to the host element if orientation is set to vertical', () => {
    wrapper.orientation = 'vertical';
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-vertical': true,
    }));
  });
});
