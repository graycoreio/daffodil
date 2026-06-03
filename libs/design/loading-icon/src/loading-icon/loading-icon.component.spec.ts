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

import { DaffPalette } from '@daffodil/design';

import { DaffLoadingIconComponent } from './loading-icon.component';

@Component({
  template: '<daff-loading-icon [color]="color()"></daff-loading-icon>',
  imports: [
    DaffLoadingIconComponent,
  ],
})
class WrapperComponent {
  color = signal<DaffPalette>(undefined);
}

describe('@daffodil/design/loading-icon | DaffLoadingIconComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffLoadingIconComponent;
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
    de = fixture.debugElement.query(By.css('daff-loading-icon'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-loading-icon" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-loading-icon': true,
    }));
  });

  it('should take color as an input', () => {
    wrapper.color.set('primary');
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
  });
});
