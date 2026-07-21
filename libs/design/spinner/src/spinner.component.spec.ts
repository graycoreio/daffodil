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

import { DaffColor } from '@daffodil/design';
import { DaffSpinnerComponent } from '@daffodil/design/spinner';

@Component({
  template: '<daff-spinner [color]="color()" [size]="size()"></daff-spinner>',
  imports: [
    DaffSpinnerComponent,
  ],
})
class WrapperComponent {
  color = signal<DaffColor>(undefined);
  size = signal<string>(undefined);
}

describe('@daffodil/design/spinner | DaffSpinnerComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let component: DaffSpinnerComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    de = fixture.debugElement.query(By.css('daff-spinner'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-spinner" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-spinner': true,
    }));
  });

  it('should take color as an input', () => {
    wrapper.color.set('primary');
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
  });

  it('should take size as an input', () => {
    wrapper.size.set('lg');
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-lg')).toEqual(true);
  });

  it('should set the default size to `md`', () => {
    expect(de.nativeElement.classList.contains('daff-md')).toEqual(true);
  });

  it('should set the default aria-label to "loading"', () => {
    expect(de.nativeElement.getAttribute('aria-label')).toEqual('loading');
  });
});
