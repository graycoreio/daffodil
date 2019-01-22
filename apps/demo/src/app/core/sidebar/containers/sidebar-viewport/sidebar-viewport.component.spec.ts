import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { SidebarViewportContainer } from './sidebar-viewport.component';
import * as fromSidebar from '../../reducers/index';
import { ToggleSidebar, OpenSidebar, CloseSidebar, SetSidebarState } from '../../actions/sidebar.actions';
import { DaffSidebarModule, DaffSidebarViewportComponent } from '@daffodil/design';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({selector: 'demo-sidebar', template: ''})
class MockSidebarContainer {
  @Output() close: EventEmitter<any> = new EventEmitter();
}

describe('SidebarContainer', () => {
  let component: SidebarViewportContainer;
  let fixture: ComponentFixture<SidebarViewportContainer>;
  
  let sidebarViewport: DaffSidebarViewportComponent;

  let store: Store<fromSidebar.State>;
  let stubShowSidebar: boolean;
  let sidebarContainer: MockSidebarContainer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationSidebar: combineReducers(fromSidebar.reducers),
        }),
        NoopAnimationsModule,
        DaffSidebarModule,
      ],
      declarations: [ 
        SidebarViewportContainer,
        MockSidebarContainer
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarViewportContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');

    fixture.detectChanges();

    sidebarViewport = fixture.debugElement.query(By.css("daff-sidebar-viewport")).componentInstance;
    sidebarContainer = fixture.debugElement.query(By.css("demo-sidebar")).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the `daff-sidebar-viewport` mode to over', () => {
    expect(sidebarViewport.mode).toEqual("over");
  });

  it('should call close when the `daff-sidebar-viewport` emits `backdropClicked`', () => {
    spyOn(component, 'close');

    sidebarViewport.backdropClicked.emit()

    expect(component.close).toHaveBeenCalledWith();    
  });

  describe('when sidebarContainer emits close', () => {
    
    it('should call close', () => {
      spyOn(component, 'close');

      sidebarContainer.close.emit();
      
      expect(component.close).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('should initialize showSidebar$', () => {
      stubShowSidebar = false;
      spyOn(fromSidebar, 'selectShowSidebar').and.returnValue(stubShowSidebar);

      component.ngOnInit();

      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('methods', () => {
    describe('toggle', () => {
      it('should call store.dispatch with a ToggleSidebar action', () => {
        component.toggle();
  
        expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
      });
    });

    describe('open', () => {
      it('should call store.dispatch with a OpenSidebar action', () => {
        component.open();
  
        expect(store.dispatch).toHaveBeenCalledWith(new OpenSidebar());
      });
    });

    describe('close', () => {
      it('should call store.dispatch with a CloseSidebar action', () => {
        component.close();
  
        expect(store.dispatch).toHaveBeenCalledWith(new CloseSidebar());
      });
    });

    describe('setVisibility', () => {
      it('should call store.dispatch with a SetSidebarAction action', () => {
        component.setVisibility(true);
  
        expect(store.dispatch).toHaveBeenCalledWith(new SetSidebarState(true));
      });
    });
  });
});
