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

import { DaffStatus } from './statusable';
import { DaffStatusableDirective } from './statusable.directive';

@Component({
  template: `
		<div daffStatusable [status]="status"></div>`,
  standalone: false,
})

class WrapperComponent {
  status: DaffStatus;
}

describe('@daffodil/design | DaffStatusableDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let directive: DaffStatusableDirective;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DaffStatusableDirective,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffStatusable]'));

    directive = de.injector.get(DaffStatusableDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
    expect(directive).toBeTruthy();
  });

  it('should take status as an input', () => {
    expect(directive.status).toEqual(wrapper.status);
  });

  it('should add a class of .daff-info to the host element if status is set to info', () => {
    wrapper.status = 'info';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-info': true,
    }));
  });

  it('should add a class of .daff-warn to the host element if status is set to warn', () => {
    wrapper.status = 'warn';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-warn': true,
    }));
  });

  it('should add a class of .daff-critical to the host element if status is set to critical', () => {
    wrapper.status = 'critical';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-critical': true,
    }));
  });

  it('should add a class of .daff-success to the host element if status is set to success', () => {
    wrapper.status = 'success';
    fixture.detectChanges();

    expect(directive.class).toEqual(jasmine.objectContaining({
      'daff-success': true,
    }));
  });
});
