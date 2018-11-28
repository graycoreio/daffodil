import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import * as fromSidebar from '../../../sidebar/reducers/index';
import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';

import { LogoModule } from '../../../logo/logo.module';
import { FoundationHeaderContainer } from './header.component';
import { FoundationHeaderComponent } from '../../components/header/header.component';

describe('FoundationHeaderContainer', () => {
  let component: FoundationHeaderContainer;
  let fixture: ComponentFixture<FoundationHeaderContainer>;

  let store: Store<fromSidebar.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        LogoModule
      ],
      declarations: [
        FoundationHeaderContainer,
        FoundationHeaderComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationHeaderContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when [header-menu-button] is clicked', () => {
    it('should call store.dispatch with a ToggleSidebar action', () => {
      let sidebarButton = fixture.debugElement.query(By.css('[header-menu-button]')).nativeElement;
      sidebarButton.click();
      
      expect(store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
    });
  });
});
