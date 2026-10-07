import {
  Component,
  DebugElement,
  signal,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffViewportBackdropComponent } from './backdrop.component';

describe('@daffodil/design/viewport | DaffViewportBackdropComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffViewportBackdropComponent>;
  let component: DaffViewportBackdropComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffViewportBackdropComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffViewportBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set transparent to `false` by default', () => {
    expect(component.transparent()).toBe(false);
  });

  it('should set fullscreen to `false` by default', () => {
    expect(component.fullscreen()).toBe(false);
  });
});

@Component({
  template: `
    <daff-viewport-backdrop
      [fullscreen]="fullscreen()"
      [transparent]="transparent()"
      (backdropClicked)="backdropFunction()"></daff-viewport-backdrop>
    `,
  imports: [
    DaffViewportBackdropComponent,
  ],
})
class WrapperComponent {
  fullscreen = signal(false);
  transparent = signal(true);
  backdropFunction = () => {};
}

describe('@daffodil/design/viewport | DaffViewportBackdropComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffViewportBackdropComponent;
  let de: DebugElement;

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
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-viewport-backdrop'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('the transparent property', () => {
    it('should not add the class `transparent` to the host element when transparent="false"', () => {
      wrapper.transparent.set(false);
      fixture.detectChanges();

      expect(de.nativeElement.classList).not.toContain('transparent');
    });

    it('should add the class `transparent` to the host element when transparent="true"', () => {
      wrapper.transparent.set(true);
      fixture.detectChanges();

      expect(de.nativeElement.classList).toContain('transparent');
    });
  });

  describe('the fullscreen property', () => {
    it('should not add the class `fullscreen` to the host element when fullscreen="false"', () => {
      wrapper.fullscreen.set(false);
      fixture.detectChanges();

      expect(de.nativeElement.classList).not.toContain('fullscreen');
    });

    it('should add the class `fullscreen` to the host element when fullscreen="true"', () => {
      wrapper.fullscreen.set(true);
      fixture.detectChanges();

      expect(de.nativeElement.classList).toContain('fullscreen');
    });
  });

  it('should emit backdropClicked when the backdrop host element is clicked', () => {
    spyOn(component.backdropClicked, 'emit');

    de.nativeElement.click();

    expect(component.backdropClicked.emit).toHaveBeenCalledWith();
  });
});
