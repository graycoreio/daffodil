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

import { DaffPalette } from './colorable';
import { DaffColorableDirective } from './colorable.directive';

@Component({
  template: `
		<div daffColorable [color]="color"></div>`,
  standalone: false,
})

class WrapperComponent {
  color: DaffPalette;
}

describe('@daffodil/design | DaffColorableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffColorableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffColorableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffColorable]'));

    directive = de.injector.get(DaffColorableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take color as an input', () => {
    expect(directive.color).toEqual(wrapper.color);
  });

  it('should add a class of .daff-primary to the host element if color is set to primary', () => {
    wrapper.color = 'primary';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-primary': true,
    }));
  });

  it('should add a class of .daff-secondary to the host element if color is set to secondary', () => {
    wrapper.color = 'secondary';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-secondary': true,
    }));
  });

  it('should add a class of .daff-tertiary to the host element if color is set to tertiary', () => {
    wrapper.color = 'tertiary';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-tertiary': true,
    }));
  });

  it('should add a class of .daff-black to the host element if color is set to black', () => {
    wrapper.color = 'black';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-black': true,
    }));
  });

  it('should add a class of .daff-white to the host element if color is set to white', () => {
    wrapper.color = 'white';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-white': true,
    }));
  });

  it('should add a class of .daff-theme to the host element if color is set to theme', () => {
    wrapper.color = 'theme';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-theme': true,
    }));
  });

  it('should add a class of .daff-theme-contrast to the host element if color is set to theme-contrast', () => {
    wrapper.color = 'theme-contrast';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-theme-contrast': true,
    }));
  });
});
