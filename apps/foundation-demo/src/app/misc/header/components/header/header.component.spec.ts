import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { ToggleShowSidebar } from '../../actions/header.actions';
import * as fromFoundationHeader from '../../reducers/index';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store;
  let stubSelectSidebar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationHeader: combineReducers(fromFoundationHeader.reducers),
        })
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    component = fixture.componentInstance;

    stubSelectSidebar = false;
    spyOn(fromFoundationHeader, 'selectShowSidebar').and.returnValue(stubSelectSidebar);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    
    it('should initialize showSidebar$', () => {
      component.showSidebar$.subscribe((showSidebar) => {
        expect(showSidebar).toEqual(stubSelectSidebar);
      });
    });
  });

  describe('toggleShowSidebar', () => {
    
    it('should call store.dispatch with a ToggleShowSidebar action', () => {
      component.toggleShowSidebar();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowSidebar());
    });
  });

  describe('when showSidebar$ is false', () => {
    
    it('should set header__sidebar-hide class on sidebar', () => {
      component.showSidebar$ = of(false);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.header__sidebar')).nativeElement.classList.contains('header__sidebar-hide')).toBeTruthy();
    });
  });

  describe('when showSidebar$ is true', () => {
    
    it('should set header__sidebar-show class on sidebar', () => {
      component.showSidebar$ = of(true);
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('.header__sidebar')).nativeElement.classList.contains('header__sidebar-show')).toBeTruthy();
    });
  });
  
  describe('when the close icon is clicked', () => {
    
    it('should call toggleShowSidebar', () => {
      spyOn(component, 'toggleShowSidebar');

      fixture.debugElement.query(By.css('.header__close')).nativeElement.click();

      expect(component.toggleShowSidebar).toHaveBeenCalled();
    });
  });
});
