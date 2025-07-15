import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffListComponent } from './list.component';

@Component({
  template: `
    <daff-list [mode]="mode"></daff-list>
    <daff-nav-list></daff-nav-list>
  `,
  imports: [
    DaffListComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/list | DaffListComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffListComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;
  let navDE: DebugElement;
  let navList: DaffListComponent;

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
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-list'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('<daff-list>', () => {
    it('should add a class of "daff-list" to the host element', () => {
      expect(de.nativeElement.classList.contains('daff-list')).toBeTruthy();
    });

    it('should have a role of list', () => {
      expect(component.role).toBe('list');
    });
  });

  describe('<daff-nav-list>', () => {
    beforeEach(() => {
      navDE = fixture.debugElement.query(By.css('daff-nav-list'));
      navList = navDE.componentInstance;
    });

    it('should add a class of "daff-nav-list" to the host element', () => {
      expect(navDE.nativeElement.classList.contains('daff-nav-list')).toBeTruthy();
    });

    it('should have a role of navigation', () => {
      expect(navList.role).toBe('navigation');
    });
  });
});
