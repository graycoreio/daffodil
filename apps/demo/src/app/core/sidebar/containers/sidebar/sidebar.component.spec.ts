import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { DaffLinkSetModule } from '@daffodil/design/link-set';
import { DaffLoadingIconModule } from '@daffodil/design/loading-icon';
import {
  DaffSidebarModule,
  DaffSidebarComponent,
} from '@daffodil/design/sidebar';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationLoad } from '@daffodil/navigation/state';
import {
  DaffNavigationStateTestingModule,
  MockDaffNavigationFacade,
} from '@daffodil/navigation/state/testing';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';


import { SidebarContainer } from './sidebar.component';
import { SidebarListComponent } from '../../components/sidebar-list/sidebar-list.component';

@Component({
  template: '<demo-sidebar></demo-sidebar>',
  standalone: false,
})
class WrapperComponent {}

describe('SidebarContainer', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: SidebarContainer;
  let daffSidebar: DaffSidebarComponent;
  let navFacade: MockDaffNavigationFacade<DaffNavigationTree>;
  const daffNavigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  const tree: DaffNavigationTree = daffNavigationTreeFactory.create();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffSidebarModule,
        FontAwesomeModule,
        DaffLoadingIconModule,
        DaffLinkSetModule,
        DaffNavigationStateTestingModule,
      ],
      declarations: [
        WrapperComponent,
        SidebarContainer,
        SidebarListComponent,
      ],
      providers: [
        provideMockStore(),
      ],
    })
      .overrideComponent(SidebarListComponent, {
        remove: {
          templateUrl: '',
        },
        add: {
          template: '',
        },
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    navFacade = TestBed.inject(MockDaffNavigationFacade);

    fixture.detectChanges();

    wrapper = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('demo-sidebar')).componentInstance;
    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should dispatch a DaffNavigationTreeLoad', () => {
      spyOn(navFacade, 'dispatch');
      component.ngOnInit();
      expect(navFacade.dispatch).toHaveBeenCalledWith(new DaffNavigationLoad());
    });
  });

  it('should call `close` when the daff-sidebar emits `escapePressed`', () => {
    spyOn(component, 'onClose');

    daffSidebar.escapePressed.emit();

    expect(component.onClose).toHaveBeenCalled();
  });

  describe('when loading is false', () => {

    beforeEach(() => {
      component.treeLoading$ = of(false);
      fixture.detectChanges();
    });

    it('should render the demo-sidebar-list', () => {
      const sidebarListComponent = fixture.debugElement.query(By.css('demo-sidebar-list')).componentInstance;

      expect(sidebarListComponent).toBeTruthy();
    });

    it('should not render the daff-loading-icon', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

      expect(loadingIcon).toBeFalsy();
    });
  });

  describe('when treeLoading is true', () => {

    beforeEach(() => {
      component.treeLoading$ = of(true);
      fixture.detectChanges();
    });

    it('should not render the demo-sidebar-list', () => {
      const sidebarListComponent = fixture.debugElement.query(By.css('demo-sidebar-list'));

      expect(sidebarListComponent).toBeFalsy();
    });

    it('should render the daff-loading-icon', () => {
      const loadingIcon = fixture.debugElement.query(By.css('daff-loading-icon'));

      expect(loadingIcon).toBeTruthy();
    });
  });

  describe('on demo-sidebar-list', () => {
    it('should set tree', () => {
      const sidebarListComponent = fixture.debugElement.query(By.css('demo-sidebar-list'));
      component.tree$ = of(tree);
      fixture.detectChanges();
      expect(sidebarListComponent.componentInstance.tree).toEqual(tree);
    });
  });
});
