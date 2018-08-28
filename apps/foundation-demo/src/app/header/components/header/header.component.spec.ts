import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ToggleShowSidebar } from '../../../sidebar/actions/sidebar.actions';
import * as fromFoundationHeader from '../../../sidebar/reducers/index';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

@Component({selector: 'sidebar-view', template: ''})
class MockSidebarViewComponent {}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store;
  let stubShowSidebar;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromFoundationHeader.reducers),
        }),
        RouterTestingModule
      ],
      declarations: [ 
        MockSidebarViewComponent,
        HeaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.get(Store);
    router = TestBed.get(Router);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;

    stubShowSidebar = false;
    spyOn(fromFoundationHeader, 'selectShowSidebar').and.returnValue(stubShowSidebar);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    
    it('should initialize showSidebar$', () => {
      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubShowSidebar);
      });
    });
  });

  describe('toggleShowSidebar', () => {
    
    it('should call store.dispatch with a ToggleShowSidebar action within a setTimeout', fakeAsync(() => {
      component.toggleShowSidebar();
      tick(200);

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowSidebar());
    }));
  });

  describe('when open-icon is clicked', () => {
    
    it('should call toggleShowSidebar', () => {
      spyOn(component, 'toggleShowSidebar');
      fixture.debugElement.query(By.css('.header__open-icon')).nativeElement.click();

      expect(component.toggleShowSidebar).toHaveBeenCalled();
    });
  });

  describe('when logo-icon is clicked', () => {
    
    it('should call router.navigateByUrl', () => {
      spyOn(router, 'navigateByUrl');
      fixture.debugElement.query(By.css('.header__logo-icon')).nativeElement.click();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/');
    });
  });
});
