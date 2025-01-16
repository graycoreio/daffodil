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

import { DaffTextAlignment } from './text-alignable';
import { DaffTextAlignableDirective } from './text-alignable.directive';

@Component({
  template: `
		<div daffTextAlignable [textAlignment]="textAlignment"></div>`,
  standalone: false,
})

class WrapperComponent {
  textAlignment: DaffTextAlignment;
}

describe('@daffodil/design | DaffTextAlignableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffTextAlignableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffTextAlignableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffTextAlignable]'));

    directive = de.injector.get(DaffTextAlignableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take textAlignment as an input', () => {
    expect(directive.textAlignment).toEqual(wrapper.textAlignment);
  });

  it('should add a class of .daff-left to the host element if textAlignment is set to left', () => {
    wrapper.textAlignment = 'left';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-left': true,
    }));
  });

  it('should add a class of .daff-center to the host element if textAlignment is set to center', () => {
    wrapper.textAlignment = 'center';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-center': true,
    }));
  });

  it('should add a class of .daff-right to the host element if textAlignment is set to right', () => {
    wrapper.textAlignment = 'right';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-right': true,
    }));
  });
});
