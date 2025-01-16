import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {
  Component,
  signal,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import {
  DaffSidebarModule,
  DaffSidebarViewportComponent,
  DaffSidebarComponent,
  DaffSidebarModeEnum,
  DaffSidebarRegistration,
} from '@daffodil/design/sidebar';

import { DaffioSidebarViewportContainer } from './sidebar-viewport.component';
import { DaffioSidebarService } from '../../services/sidebar.service';

@Component({
  template: '',
  standalone: false,
})
class TestComponent {}

describe('DaffioSidebarViewportContainer', () => {
  let component: DaffioSidebarViewportContainer;
  let fixture: ComponentFixture<DaffioSidebarViewportContainer>;

  let daffSidebarViewport: DaffSidebarViewportComponent;
  let daffSidebar: DaffSidebarComponent;

  let activeRegistration: BehaviorSubject<DaffSidebarRegistration>;
  let mode: BehaviorSubject<DaffSidebarModeEnum>;
  let sidebarServiceSpy: jasmine.SpyObj<DaffioSidebarService>;

  beforeEach(waitForAsync(() => {
    activeRegistration = new BehaviorSubject({
      id: 'id',
    });
    mode = new BehaviorSubject(DaffSidebarModeEnum.Over);
    sidebarServiceSpy = jasmine.createSpyObj(
      'DaffioSidebarService',
      ['close'],
      {
        activeRegistration$: activeRegistration,
        mode$: mode,
        isOpen: signal(false),
      },
    );

    TestBed.configureTestingModule({
      declarations: [
        DaffioSidebarViewportContainer,
        TestComponent,
      ],
      imports: [RouterTestingModule,
        NoopAnimationsModule,
        DaffSidebarModule],
      providers: [
        {
          provide: DaffioSidebarService,
          useValue: sidebarServiceSpy,
        },
        provideMockStore(),
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioSidebarViewportContainer);
    component = fixture.componentInstance;

    fixture.detectChanges();
    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
    daffSidebarViewport = fixture.debugElement.query(By.css('daff-sidebar-viewport')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    it('should call close', () => {
      daffSidebarViewport.backdropClicked.emit();

      expect(sidebarServiceSpy.close).toHaveBeenCalledWith();
    });
  });

  describe('when there is a active registered component for the sidebar header', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
        header: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarHeader).toBeTruthy();
    });
  });

  describe('when there is not a active registered component for the sidebar header', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
      });
      fixture.detectChanges();
    });

    it('should not render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarHeader).toBeFalsy();
    });
  });

  describe('when there is a active registered component for the sidebar footer', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
        footer: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarFooter).toBeTruthy();
    });
  });

  describe('when there is not a active registered component for the sidebar footer', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
      });
      fixture.detectChanges();
    });

    it('should not render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarFooter).toBeFalsy();
    });
  });

  describe('when there is a active registered component for the sidebar body', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
        body: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar body', () => {
      const sidebarBody = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarBody).toBeTruthy();
    });
  });

  describe('when there is not a active registered component for the sidebar body', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
      });
      fixture.detectChanges();
    });

    it('should not render the sidebar body', () => {
      const sidebarBody = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarBody).toBeFalsy();
    });
  });

  describe('when the sidebar mode is side-fixed', () => {
    beforeEach(() => {
      mode.next(DaffSidebarModeEnum.SideFixed);
      fixture.detectChanges();
    });

    it('should not render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarHeader).toBeFalsy();
    });

    it('should not render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarFooter).toBeFalsy();
    });
  });

  describe('when the sidebar mode is not side-fixed and there are named views for the header and footer', () => {
    beforeEach(() => {
      activeRegistration.next({
        id: 'id',
        header: TestComponent,
        footer: TestComponent,
      });
      fixture.detectChanges();
    });

    it('should render the sidebar header', () => {
      const sidebarHeader = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarHeader).toBeTruthy();
    });

    it('should render the sidebar footer', () => {
      const sidebarFooter = fixture.debugElement.query(By.directive(TestComponent));
      expect(sidebarFooter).toBeTruthy();
    });
  });
});
