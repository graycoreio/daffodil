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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffSidebarViewportBackdropComponent } from './sidebar-viewport-backdrop.component';

@Component({
  template: `
    <daff-sidebar-viewport-backdrop
      [fullscreen]="fullscreen"
      [transparent]="transparent"
      (backdropClicked)="backdropFunction()"></daff-sidebar-viewport-backdrop>
    `,
  imports: [
    DaffSidebarViewportBackdropComponent,
  ],
})
class WrapperComponent {
  fullscreen = false;
  showValue = true;
  transparent = true;
  backdropFunction = () => {};
}

describe('@daffodil/design/sidebar | DaffSidebarViewportBackdropComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffSidebarViewportBackdropComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-sidebar-viewport-backdrop'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('the transparent property', () => {
    describe('when trasparent="false"', () => {
      it('should not add the class `transparent` to the host element', () => {
        wrapper.transparent = false;
        fixture.detectChanges();

        expect(de.nativeElement.classList).not.toContain('transparent');
      });
    });

    describe('when transparent="true"', () => {
      it('should add the class `transparent` to the host element', () => {
        wrapper.transparent = true;
        fixture.detectChanges();

        expect(de.nativeElement.classList).toContain('transparent');
      });
    });
  });

  describe('the fullscreen property', () => {
    describe('when fullscreen="false"', () => {
      it('should not add the class `fullscreen` to the host element', () => {
        wrapper.fullscreen = false;
        fixture.detectChanges();

        expect(de.nativeElement.classList).not.toContain('fullscreen');
      });
    });

    describe('when fullscreen="true"', () => {
      it('should add the class `fullscreen` to the host element', () => {
        wrapper.fullscreen = true;
        fixture.detectChanges();
        expect(de.nativeElement.classList).toContain('fullscreen');
      });
    });
  });

  describe('when the backdrop host element is clicked', () => {
    it('should emit backdropClicked', () => {
      spyOn(component.backdropClicked, 'emit');

      de.nativeElement.click();

      expect(component.backdropClicked.emit).toHaveBeenCalledWith();
    });
  });
});


describe('@daffodil/design/sidebar | DaffSidebarViewportBackdropComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffSidebarViewportBackdropComponent>;
  let component: DaffSidebarViewportBackdropComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffSidebarViewportBackdropComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSidebarViewportBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set transparent to `false` by default', () => {
    expect(component.transparent).toBe(false);
  });

  it('should set fullscreen to `false` by default', () => {
    expect(component.fullscreen).toBe(false);
  });
});
