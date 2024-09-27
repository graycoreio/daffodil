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

import { DaffPalette } from '@daffodil/design';

import { DaffLoadingIconComponent } from './loading-icon.component';

@Component({
  template: '<daff-loading-icon [color]="color" [diameter]="diameter"></daff-loading-icon>',
  standalone: true,
  imports: [
    DaffLoadingIconComponent,
  ],
})
class WrapperComponent {
  color: DaffPalette;
  diameter = 60;
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
    component = fixture.debugElement.query(By.css('daff-loading-icon')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-loading-icon>', () => {
    it('should add a class of "daff-loading-icon" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-loading-icon': true,
      }));
    });
  });

  it('has a default value of 60 for the diameter', () => {
    expect(component.diameter).toEqual(60);
  });

  it('can take a `diameter` as input which sets max-width on the `daff-loading-icon` host', () => {
    wrapper.diameter = 50;
    fixture.detectChanges();
    expect(de.nativeElement.style.maxWidth).toEqual('50px');
  });

  it('should take color as an input', () => {
    wrapper.color = 'primary';
    fixture.detectChanges();

    expect(de.nativeElement.classList.contains('daff-primary')).toEqual(true);
  });
});
