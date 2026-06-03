import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffLoadableDirective } from '@daffodil/design';

@Component({
  template: `
		<div daffLoadable [loading]="loading()"></div>`,
  imports: [
    DaffLoadableDirective,
  ],
})

class WrapperComponent {
  loading = signal<boolean>(undefined);
}

describe('@daffodil/design | DaffLoadableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffLoadableDirective;

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
    de = fixture.debugElement.query(By.css('[daffLoadable]'));

    directive = de.injector.get(DaffLoadableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take loading as an input', () => {
    expect(directive.loading).toEqual(wrapper.loading());
  });

  it('should add a class of .daff-loading to the host element if loading is set to true', () => {
    wrapper.loading.set(true);
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-loading': true,
    }));
  });

  it('should not add a class of .daff-loading to the host element if loading is set to false', () => {
    wrapper.loading.set(false);
    fixture.detectChanges();

    expect(de.classes['daff-loading']).toBeUndefined();
  });
});
