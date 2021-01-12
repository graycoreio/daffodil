import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { provideMockStore } from '@ngrx/store/testing';

import { DaffSidebarModule, DaffSidebarComponent, DaffLoadingIconModule, DaffLinkSetModule } from '@daffodil/design';
import { DaffNavigationTree } from '@daffodil/navigation';
import { DaffNavigationFacade, DaffNavigationLoad } from '@daffodil/navigation/state';
import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import { DaffNavigationTestingModule, MockDaffNavigationFacade } from '@daffodil/navigation/state/testing';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarContainer } from './sidebar.component';
import { SidebarListComponent } from '../../components/sidebar-list/sidebar-list.component';

@Component({template: '<demo-sidebar></demo-sidebar>'})
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
        DaffSidebarModule,
        FontAwesomeModule,
        DaffLoadingIconModule,
        DaffLinkSetModule,
        DaffNavigationTestingModule
      ],
      declarations: [
        WrapperComponent,
        SidebarContainer,
        SidebarListComponent
      ],
      providers: [
        provideMockStore(),
      ]
    })
    .overrideComponent(SidebarListComponent, {
      remove: {
        templateUrl: ''
      },
      add: {
        template: ''
      }
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
      expect(navFacade.dispatch).toHaveBeenCalledWith(new DaffNavigationLoad('2'));
    });
  })

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
