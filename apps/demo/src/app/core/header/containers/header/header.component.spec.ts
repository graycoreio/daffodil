import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DemoHeaderContainer } from './header.component';
import { LogoModule } from '../../../logo/logo.module';
import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';
import * as fromSidebar from '../../../sidebar/reducers/index';
import { DemoHeaderComponent } from '../../components/header/header.component';

describe('DemoHeaderContainer', () => {
  let component: DemoHeaderContainer;
  let fixture: ComponentFixture<DemoHeaderContainer>;

  let store: Store<fromSidebar.State>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        LogoModule,
        FontAwesomeModule,
      ],
      declarations: [
        DemoHeaderContainer,
        DemoHeaderComponent,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoHeaderContainer);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when [header-menu-button] is clicked', () => {
    it('should call store.dispatch with a ToggleSidebar action', () => {
      const sidebarButton = fixture.debugElement.query(By.css('[header-menu-button]')).nativeElement;
      sidebarButton.click();

      expect(<any>store.dispatch).toHaveBeenCalledWith(new ToggleSidebar());
    });
  });
});
