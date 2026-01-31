import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import {
  StoreModule,
  Store,
} from '@ngrx/store';

import { DemoHeaderContainer } from './header.component';
import { ToggleSidebar } from '../../../sidebar/actions/sidebar.actions';
import * as fromSidebar from '../../../sidebar/reducers/index';

describe('DemoHeaderContainer', () => {
  let component: DemoHeaderContainer;
  let fixture: ComponentFixture<DemoHeaderContainer>;

  let store: Store<fromSidebar.State>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        DemoHeaderContainer,
      ],
      providers: [
        provideRouter([]),
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
