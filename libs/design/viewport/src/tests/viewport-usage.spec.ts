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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  DaffSidebarComponent,
  DaffSidebarMode,
  DaffSidebarSide,
} from '@daffodil/design/sidebar';
import { DaffViewportComponent } from '@daffodil/design/viewport';

import { DaffNavPlacement } from '../helpers/nav-placement';

@Component({
  template: `<daff-viewport [navPlacement]="navPlacement()" [stateless]="stateless()"></daff-viewport>`,
  imports: [
    DaffViewportComponent,
  ],
})
class WrapperComponent {
  navPlacement = signal<DaffNavPlacement>('above');
  stateless = signal(false);
}

describe('@daffodil/design/viewport | DaffViewportComponent | Usage', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffViewportComponent;
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

    de = fixture.debugElement.query(By.css('daff-viewport'));

    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('navPlacement', () => {
    it('should be able to take `navPlacement` as an input', () => {
      expect(component.navPlacement()).toEqual(wrapper.navPlacement());
    });

    it('should add a class of `.beside` if navPlacement="beside"', () => {
      wrapper.navPlacement.set('beside');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('beside')).toBeTruthy();
    });

    it('should add a class of `.above` if navPlacement="above"', () => {
      wrapper.navPlacement.set('above');
      fixture.detectChanges();

      expect(de.nativeElement.classList.contains('above')).toBeTruthy();
    });
  });

  it('should be able to take `stateless` as an input', () => {
    expect(component.stateless()).toEqual(wrapper.stateless());
  });
});

@Component({
  template: `
    <daff-viewport>
      <daff-sidebar [mode]="mode()" [side]="side()" [open]="open()">Sidebar content</daff-sidebar>
    </daff-viewport>
  `,
  imports: [
    DaffViewportComponent,
    DaffSidebarComponent,
  ],
})
class SidebarWrapperComponent {
  mode = signal<DaffSidebarMode>('under');
  side = signal<DaffSidebarSide>('left');
  open = signal(false);
}

describe('@daffodil/design/viewport | DaffViewportComponent | Sidebar State', () => {
  let wrapper: SidebarWrapperComponent;
  let fixture: ComponentFixture<SidebarWrapperComponent>;
  let viewport: DebugElement;
  let sidebar: DaffSidebarComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        // can be removed once `@angular/animations` is removed from sidebar
        NoopAnimationsModule,
        SidebarWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWrapperComponent);
    wrapper = fixture.componentInstance;

    viewport = fixture.debugElement.query(By.css('daff-viewport'));
    sidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;

    fixture.detectChanges();
  });

  it('should add the `under-open` animation class when an `under` sidebar is open', () => {
    wrapper.mode.set('under');
    wrapper.open.set(true);
    fixture.detectChanges();

    expect(viewport.nativeElement.classList.contains('under-open')).toBeTrue();
  });

  it('should not add the `under-open` animation class when the `under` sidebar is closed', () => {
    wrapper.mode.set('under');
    wrapper.open.set(false);
    fixture.detectChanges();

    expect(viewport.nativeElement.classList.contains('under-open')).toBeFalse();
  });

  it('should add the `.pad-left` class when a left `side-fixed` sidebar is open', () => {
    wrapper.mode.set('side-fixed');
    wrapper.side.set('left');
    wrapper.open.set(true);
    fixture.detectChanges();

    expect(viewport.nativeElement.classList.contains('pad-left')).toBeTrue();
  });

  it('should add the `.pad-right` class when a right `side-fixed` sidebar is open', () => {
    wrapper.mode.set('side-fixed');
    wrapper.side.set('right');
    wrapper.open.set(true);
    fixture.detectChanges();

    expect(viewport.nativeElement.classList.contains('pad-right')).toBeTrue();
  });

  it('should bind the `--daff-viewport-content-shift` style to the open `under` sidebar width', () => {
    wrapper.mode.set('under');
    wrapper.side.set('left');
    wrapper.open.set(true);
    fixture.detectChanges();

    expect(viewport.nativeElement.style.getPropertyValue('--daff-viewport-content-shift'))
      .toEqual(`${sidebar.width}px`);
  });
});
