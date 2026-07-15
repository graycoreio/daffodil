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
  DAFF_MENU_COMPONENTS,
  DaffMenuComponent,
} from '@daffodil/design/menu';

import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { provideTestMenuService } from '../testing/dummy-service';

@Component({
  template: `<daff-menu></daff-menu>`,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/menu | DaffMenuComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffMenuComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
        { provide: DAFF_MENU_CONFIG, useValue: <DaffMenuConfig>{ menuId: 'daff-menu-test' }},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    de = fixture.debugElement.query(By.css('daff-menu'));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-menu" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-menu': true,
    }));
  });

  it('should have a tabindex of 0', () => {
    expect(de.nativeElement.tabIndex).toEqual(0);
  });

  it('should have a role of menu', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('menu');
  });

  it('should have an id matching the provided DAFF_MENU_CONFIG menuId', () => {
    expect(de.nativeElement.getAttribute('id')).toBe('daff-menu-test');
  });
});
