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

import {
  DAFF_MENU_ITEM_TOKEN,
  DaffMenuService,
} from '@daffodil/design/menu';

import { DaffBreadcrumbMenuItemDirective } from './breadcrumb-menu-item.directive';

@Component({
  template: `
    <a class="breadcrumb-link">Link</a>
    <span daffBreadcrumbMenuItem></span>
  `,
  imports: [
    DaffBreadcrumbMenuItemDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/breadcrumb | DaffBreadcrumbMenuItemDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let directive: DaffBreadcrumbMenuItemDirective;
  let menuServiceSpy: jasmine.SpyObj<DaffMenuService>;
  let focusableEl: HTMLElement;

  beforeEach(waitForAsync(() => {
    menuServiceSpy = jasmine.createSpyObj('DaffMenuService', ['close']);

    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        { provide: DaffMenuService, useValue: menuServiceSpy },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();
    de = fixture.debugElement.query(By.directive(DaffBreadcrumbMenuItemDirective));
    directive = de.injector.get(DaffBreadcrumbMenuItemDirective);
    focusableEl = fixture.debugElement.query(By.css('.breadcrumb-link')).nativeElement;
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  it('should add a class of "daff-breadcrumb-menu-item" to the host element', () => {
    expect(de.classes['daff-breadcrumb-menu-item']).toBeTrue();
  });

  it('should provide DAFF_MENU_ITEM_TOKEN', () => {
    expect(de.injector.get(DAFF_MENU_ITEM_TOKEN)).toBe(directive);
  });

  it('should add "daff-menu-item" class to the previous sibling element after view init', () => {
    expect(focusableEl.classList).toContain('daff-menu-item');
  });

  it('should close the menu when the previous sibling element is clicked', () => {
    focusableEl.click();
    expect(menuServiceSpy.close).toHaveBeenCalled();
  });

  it('should focus the previous sibling element when focus() is called', () => {
    spyOn(focusableEl, 'focus');
    directive.focus();
    expect(focusableEl.focus).toHaveBeenCalled();
  });

  it('should remove "daff-menu-item" class and click listener on destroy', () => {
    fixture.destroy();
    expect(focusableEl.classList).not.toContain('daff-menu-item');

    menuServiceSpy.close.calls.reset();
    focusableEl.click();
    expect(menuServiceSpy.close).not.toHaveBeenCalled();
  });
});
