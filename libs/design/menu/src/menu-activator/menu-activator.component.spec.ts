import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffMenuActivatorDirective } from './menu-activator.component';
import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { DaffMenuComponent } from '../menu/menu.component';
import { DaffMenuService } from '../services/menu.service';
import { provideTestMenuService } from '../testing/dummy-service';

@Component({
  template: `
    <button daffMenuActivator="menu"></button>
    <daff-menu #menu></daff-menu>
  `,
  imports: [
    DaffMenuComponent,
    DaffMenuActivatorDirective,
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

  it('should set aria-controls to the reserved menu id on init', () => {
    expect(de.nativeElement.getAttribute('aria-controls')).toMatch(/^daff-menu-\d+$/);
  });

  it('should open the menu when the button is clicked', () => {
    const menuService = TestBed.inject(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalled();
  });

  it('should open the menu with the default position', () => {
    const menuService = TestBed.inject(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.objectContaining({ xPosition: 'after', yPosition: 'below' }),
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
    DaffMenuComponent,
    DaffMenuActivatorDirective,
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
    const menuService = TestBed.inject(DaffMenuService);
    spyOn(menuService, 'open');

    de.nativeElement.click();

    expect(menuService.open).toHaveBeenCalledWith(
      jasmine.anything(),
      jasmine.anything(),
      jasmine.objectContaining({ xPosition: 'before', yPosition: 'above' }),
    );
  });
});
