import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DAFF_MENU_COMPONENTS } from '@daffodil/design/menu';

import { DaffMenuActivatorDirective } from './menu-activator.component';
import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { DaffMenuService } from '../services/menu.service';
import { provideTestMenuService } from '../testing/dummy-service';

@Component({
  template: `
    <button daffMenuActivator="menu"></button>
    <daff-menu #menu></daff-menu>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/menu | DaffMenuActivatorDirective', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let component: DaffMenuActivatorDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
        { provide: DAFF_MENU_CONFIG, useValue: <DaffMenuConfig>{ menuId: 'daff-menu-test' }},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WrapperComponent);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.directive(DaffMenuActivatorDirective));
    component = de.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have set aria-haspopup to menu', () => {
    expect(de.nativeElement.getAttribute('aria-haspopup')).toBe('menu');
  });

  it('should not set aria-controls while the menu is closed', () => {
    expect(de.nativeElement.getAttribute('aria-controls')).toBeNull();
  });

  it('should set aria-controls to the reserved menu id when the menu is open', () => {
    de.nativeElement.click();
    fixture.detectChanges();

    expect(de.nativeElement.getAttribute('aria-controls')).toMatch(/^daff-menu-\d+$/);
  });

  it('should open the menu when the button is clicked', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalled();
  });

  it('should open the menu with the default position', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.objectContaining({ xPosition: 'after', yPosition: 'below' }),
      jasmine.anything(),
    );
  });

  it('should open the menu with a program origin when nothing preceded the click', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.anything(),
      'program',
    );
  });

  it('should open the menu with a mouse origin when the click follows a mousedown', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.dispatchEvent(new MouseEvent('mousedown', { button: 0 }));
    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.anything(),
      'mouse',
    );
  });

  it('should open the menu with a keyboard origin when the click follows an Enter keydown', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.anything(),
      'keyboard',
    );
  });

  it('should not carry the origin over to the next open', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    de.nativeElement.click();
    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.anything(),
      'program',
    );
  });

  it('should focus the button when focus is called', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    activator.focus();

    expect(document.activeElement).toEqual(de.nativeElement);
  });
});

@Component({
  template: `
    <button daffMenuActivator="menu" xPosition="before" yPosition="above"></button>
    <daff-menu #menu></daff-menu>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class PositionedWrapperComponent {}

describe('@daffodil/design/menu | DaffMenuActivatorDirective | With Custom Position', () => {
  let fixture: ComponentFixture<PositionedWrapperComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PositionedWrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
        { provide: DAFF_MENU_CONFIG, useValue: <DaffMenuConfig>{ menuId: 'daff-menu-test' }},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PositionedWrapperComponent);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.directive(DaffMenuActivatorDirective));
  });

  it('should open the menu with the configured position', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.objectContaining({ xPosition: 'before', yPosition: 'above' }),
      jasmine.anything(),
    );
  });
});
