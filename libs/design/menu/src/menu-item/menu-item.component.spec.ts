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
  DaffMenuItemComponent,
} from '@daffodil/design/menu';

import { DaffMenuService } from '../services/menu.service';
import { provideTestMenuService } from '../testing/dummy-service';

@Component({
  template: `
    <a href="/test" daff-menu-item>Test 1</a>
    <button daff-menu-item>Test 2</button>
  `,
  imports: [
    DaffMenuItemComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/menu | DaffMenuItemComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let buttonDE: DebugElement;
  let anchorDE: DebugElement;
  let component: DaffMenuItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daff-menu-item]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-menu-item>', () => {
    beforeEach(() => {
      buttonDE = fixture.debugElement.query(By.css('button[daff-menu-item]'));
      anchorDE = fixture.debugElement.query(By.css('a[daff-menu-item]'));
    });

    it('should add a class of "daff-menu-item" to the host element', () => {
      expect(buttonDE.classes).toEqual(jasmine.objectContaining({
        'daff-menu-item': true,
      }));

      expect(anchorDE.classes).toEqual(jasmine.objectContaining({
        'daff-menu-item': true,
      }));
    });
  });

  it('should have a role of menuitem', () => {
    expect(de.nativeElement.getAttribute('role')).toBe('menuitem');
  });

  it('should not report a submenu when it has no activator', () => {
    expect(component.hasSubmenu).toBe(false);
  });

  it('should not render a submenu indicator when it has no activator', () => {
    expect(de.query(By.css('.daff-menu-item__submenu-indicator'))).toBeNull();
  });

  it('should not set aria-haspopup when it has no activator', () => {
    expect(de.nativeElement.getAttribute('aria-haspopup')).toBeNull();
  });

  it('should close every open menu when a leaf item is activated', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService, 'closeAll');

    component.onClick();

    expect(menuService.closeAll).toHaveBeenCalled();
  });

  it('should not expose a submenu when it has no activator', () => {
    expect(component.submenu).toBeNull();
  });

  it('should step back to the parent menu on ArrowLeft when it is in a submenu', () => {
    const menuService = de.injector.get(DaffMenuService);
    (<any>menuService).isNested = true;
    spyOn(menuService, 'close');

    de.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));

    expect(menuService.close).toHaveBeenCalled();
  });

  it('should not close the root menu on ArrowLeft', () => {
    const menuService = de.injector.get(DaffMenuService);
    (<any>menuService).isNested = false;
    spyOn(menuService, 'close');

    de.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));

    expect(menuService.close).not.toHaveBeenCalled();
  });

  it('should close an open submenu of its menu once the pointer reaches it', () => {
    const menuService = de.injector.get(DaffMenuService);
    menuService.menuStack.push(menuService);
    spyOn(menuService.menuStack, 'closeSubMenuOf');

    de.nativeElement.dispatchEvent(new MouseEvent('mouseenter'));

    expect(menuService.menuStack.closeSubMenuOf).toHaveBeenCalledWith(menuService);
  });

  it('should not close anything on hover while no menu is open', () => {
    const menuService = de.injector.get(DaffMenuService);
    spyOn(menuService.menuStack, 'closeSubMenuOf');

    de.nativeElement.dispatchEvent(new MouseEvent('mouseenter'));

    expect(menuService.menuStack.closeSubMenuOf).not.toHaveBeenCalled();
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
class SubmenuWrapperComponent {}

describe('@daffodil/design/menu | DaffMenuItemComponent | as a submenu parent', () => {
  let fixture: ComponentFixture<SubmenuWrapperComponent>;
  let de: DebugElement;
  let component: DaffMenuItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SubmenuWrapperComponent,
      ],
      providers: [
        provideTestMenuService(),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmenuWrapperComponent);
    de = fixture.debugElement.query(By.css('[daff-menu-item]'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should report that it has a submenu', () => {
    expect(component.hasSubmenu).toBe(true);
  });

  it('should render a submenu indicator', () => {
    expect(de.query(By.css('.daff-menu-item__submenu-indicator'))).not.toBeNull();
  });

  it('should set aria-haspopup to menu', () => {
    expect(de.nativeElement.getAttribute('aria-haspopup')).toBe('menu');
  });

  it('should open its submenu when openSubmenu is called', () => {
    const activatorService = de.injector.get(DaffMenuService);
    spyOn(activatorService, 'open');

    component.openSubmenu();

    expect(activatorService.open).toHaveBeenCalled();
  });

  it('should not close any menu on click (the activator handles opening)', () => {
    const activatorService = de.injector.get(DaffMenuService);
    spyOn(activatorService, 'closeAll');

    component.onClick();

    expect(activatorService.closeAll).not.toHaveBeenCalled();
  });

  it('should expose the submenu it opens', () => {
    expect(component.submenu).toBe(de.injector.get(DaffMenuService));
  });

  it('should keep its own submenu open when the pointer reaches it', () => {
    const parentMenu = TestBed.inject(DaffMenuService);
    parentMenu.menuStack.push(parentMenu);
    spyOn(parentMenu.menuStack, 'closeSubMenuOf');

    de.nativeElement.dispatchEvent(new MouseEvent('mouseenter'));

    expect(parentMenu.menuStack.closeSubMenuOf).not.toHaveBeenCalled();
  });
});
