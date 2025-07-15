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

import { DaffNavListComponent } from './nav-list.component';

@Component({
  template: `
    <daff-list [mode]="mode"></daff-list>
    <daff-nav-list></daff-nav-list>
  `,
  imports: [
    DaffNavListComponent,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/list | DaffNavListComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffNavListComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

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
    de = fixture.debugElement.query(By.css('daff-nav-list'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-nav-list" to the host element', () => {
    expect(de.nativeElement.classList.contains('daff-nav-list')).toBeTruthy();
  });

  it('should have a role of navigation', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('navigation');
  });
});
