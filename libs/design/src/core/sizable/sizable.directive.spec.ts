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

import { DaffSizeAllType } from './sizable';
import { DaffSizableDirective } from './sizable.directive';

@Component({
  template: `
		<div daffSizable [size]="size"></div>`,
  standalone: false,
})

class WrapperComponent {
  size: string;
}

describe('@daffodil/design | DaffSizableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffSizableDirective<DaffSizeAllType>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffSizableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffSizable]'));

    directive = de.injector.get(DaffSizableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take size as an input', () => {
    expect(directive.size).toEqual(wrapper.size);
  });

  it('should add a class of .daff-xs to the host element if size is set to xs', () => {
    wrapper.size = 'xs';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-xs': true,
    }));
  });

  it('should add a class of .daff-sm to the host element if size is set to sm', () => {
    wrapper.size = 'sm';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-sm': true,
    }));
  });

  it('should add a class of .daff-md to the host element if size is set to md', () => {
    wrapper.size = 'md';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-md': true,
    }));
  });

  it('should add a class of .daff-lg to the host element if size is set to lg', () => {
    wrapper.size = 'lg';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-lg': true,
    }));
  });

  it('should add a class of .daff-xl to the host element if size is set to xl', () => {
    wrapper.size = 'xl';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-xl': true,
    }));
  });
});
