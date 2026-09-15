import { InputModalityDetector } from '@angular/cdk/a11y';
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  DAFF_MENU_COMPONENTS,
  DaffMenuActivatorDirective,
} from '@daffodil/design/menu';

import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../config/menu-config';
import { DaffMenuService } from '../services/menu.service';
import { provideTestMenuService } from '../testing/dummy-service';

/**
 * Hovering only opens a submenu of a menu that's already open, so the stack has to have something
 * on it before a hover does anything.
 */
const openTree = (menuService: DaffMenuService) => menuService.menuStack.push(menuService);

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
    );
  });

  it('should focus the button when focus is called', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    activator.focus();

    expect(document.activeElement).toEqual(de.nativeElement);
  });

  it('should open the menu when open() is called', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    activator.open();

    expect(menuService.open).toHaveBeenCalled();
  });

  it('should toggle the menu when toggle() is called', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'toggle');

    activator.toggle();

    expect(menuService.toggle).toHaveBeenCalled();
  });

  it('should not open a top-level menu on hover (it defaults to the click trigger)', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    activator.onMouseEnter();

    expect(menuService.open).not.toHaveBeenCalled();
  });

  it('should focus the first item of the menu it opens', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'focusFirstItem');

    activator.open();

    expect(menuService.focusFirstItem).toHaveBeenCalled();
  });

  it('should not open a submenu on ArrowRight, having no parent menu to open it beside', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    activator.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));

    expect(menuService.open).not.toHaveBeenCalled();
  });

  it('should report when it takes and loses focus', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService.menuStack, 'setHasFocus');

    activator.setHasFocus(true);

    expect(menuService.menuStack.setHasFocus).toHaveBeenCalledWith(true);
  });
});

@Component({
  template: `
    <button daff-menu-item [daffMenuActivator]="submenu">Parent</button>

    <ng-template #submenu>
      <daff-menu>
        <button daff-menu-item>Child</button>
      </daff-menu>
    </ng-template>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class NestedWrapperComponent {}

describe('@daffodil/design/menu | DaffMenuActivatorDirective | Nested submenu', () => {
  let fixture: ComponentFixture<NestedWrapperComponent>;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NestedWrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
        { provide: DAFF_MENU_CONFIG, useValue: <DaffMenuConfig>{ menuId: 'daff-menu-test' }},
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedWrapperComponent);
    fixture.detectChanges();

    de = fixture.debugElement.query(By.directive(DaffMenuActivatorDirective));
  });

  it('should open the submenu on hover (the default trigger for a nested submenu)', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');
    openTree(menuService);

    activator.onMouseEnter();

    expect(menuService.open).toHaveBeenCalled();
  });

  it('should open the submenu on hover without taking focus off the menu the pointer came from', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'focusFirstItem');
    openTree(menuService);

    activator.onMouseEnter();

    expect(menuService.focusFirstItem).not.toHaveBeenCalled();
  });

  it('should not open the submenu on hover before its own menu is open', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');

    activator.onMouseEnter();

    expect(menuService.open).not.toHaveBeenCalled();
  });

  it('should not open the submenu on hover from a touch', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');
    openTree(menuService);
    spyOnProperty(TestBed.inject(InputModalityDetector), 'mostRecentModality', 'get').and.returnValue('touch');

    activator.onMouseEnter();

    expect(menuService.open).not.toHaveBeenCalled();
  });

  it('should open the submenu and move focus into it on ArrowRight', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'open');
    spyOn(menuService, 'focusFirstItem');

    activator.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));

    expect(menuService.open).toHaveBeenCalled();
    expect(menuService.focusFirstItem).toHaveBeenCalledWith('keyboard');
  });

  it('should move focus into an already open submenu on ArrowRight rather than reopening it', () => {
    const activator = de.injector.get(DaffMenuActivatorDirective);
    const menuService = de.injector.get(DaffMenuService);
    activator.open();
    spyOn(menuService, 'open');
    spyOn(menuService, 'focusFirstItem');

    activator.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));

    expect(menuService.open).not.toHaveBeenCalled();
    expect(menuService.focusFirstItem).toHaveBeenCalledWith('keyboard');
  });

  it('should toggle rather than re-open when a nested parent item is clicked', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'toggle');

    de.nativeElement.click();

    expect(menuService.toggle).toHaveBeenCalled();
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
    );
  });
});
