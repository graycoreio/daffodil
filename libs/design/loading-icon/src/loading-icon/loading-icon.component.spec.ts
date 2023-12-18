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

@Component({ template: '<daff-loading-icon [color]="color" [diameter]="diameter"></daff-loading-icon>' })
class WrapperComponent {
  color: DaffPalette;
  diameter = 100;
}

describe('DaffLoadingIconComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let component: DaffLoadingIconComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffLoadingIconComponent,
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

  it('can take a `diameter` as input which sets max-width on the `daff-loading-icon` host', () => {
    wrapper.diameter = 50;
    fixture.detectChanges();
    expect(de.nativeElement.style.maxWidth).toEqual('50px');
  });

  describe('using a colored variant of a loading icon',() => {
    let loadingIconDe;

    it('should set a color class on the loading icon', () => {
      wrapper.color = 'secondary';
      fixture.detectChanges();

      loadingIconDe = fixture.debugElement.query(By.css('daff-loading-icon'));
      expect(loadingIconDe.nativeElement.classList.contains('daff-secondary')).toEqual(true);
    });
  });
});

describe('DaffLoadingIconComponent | Defaults', () => {
  let component: DaffLoadingIconComponent;
  let fixture: ComponentFixture<DaffLoadingIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffLoadingIconComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffLoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a default value of 60 for the diameter', () => {
    expect(component.diameter).toEqual(60);
  });

  it('should not set a default color', () => {
    expect(component.color).toBeFalsy();
  });
});


