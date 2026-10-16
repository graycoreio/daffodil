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
} from '../../config/menu-config';
import { DaffMenuService } from '../../services/menu.service';
import { provideTestMenuService } from '../../testing/dummy-service';

@Component({
  template: `
    <daff-menu>
      <a href="/test" daff-menu-item id="focused">Test</a>
      <button daff-menu-item id="not-focused">Test 2</button>
    </daff-menu>
  `,
  imports: [
    DAFF_MENU_COMPONENTS,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/menu | DaffMenuComponent | Usage', () => {
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

  it('should not take focus on its own', () => {
    expect(document.activeElement).not.toEqual(de.query(By.css('#focused')).nativeElement);
  });

  it('should focus its first item when asked to', () => {
    component.focusFirstItem();

    expect(document.activeElement).toEqual(de.query(By.css('#focused')).nativeElement);
  });

  describe('Keyboard Events', () => {
    let menuService: DaffMenuService;

    beforeEach(() => {
      menuService = TestBed.inject(DaffMenuService);
      spyOn(menuService, 'close');
      spyOn(menuService, 'closeAll');
      spyOn(component['_keyManager'], 'onKeydown');
    });

    it('should close menu on Escape key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });

      component.handleKeydown(event);

      expect(menuService.close).toHaveBeenCalledWith();
    });

    it('should handle ArrowDown key', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
      component.handleKeydown(event);

      expect(component['_keyManager'].onKeydown).toHaveBeenCalledWith(event);
    });

    it('should handle ArrowUp key', () => {
      const event = new KeyboardEvent('keydown', { key: 'ArrowUp' });
      component.handleKeydown(event);

      expect(component['_keyManager'].onKeydown).toHaveBeenCalledWith(event);
    });

    it('should handle Home key', () => {
      const event = new KeyboardEvent('keydown', { key: 'Home' });
      component.handleKeydown(event);

      expect(component['_keyManager'].onKeydown).toHaveBeenCalledWith(event);
    });

    it('should handle End key', () => {
      const event = new KeyboardEvent('keydown', { key: 'End' });

      component.handleKeydown(event);

      expect(component['_keyManager'].onKeydown).toHaveBeenCalledWith(event);
    });

    it('should close every open menu on Tab', () => {
      component.handleKeydown(new KeyboardEvent('keydown', { key: 'Tab' }));

      expect(menuService.closeAll).toHaveBeenCalled();
    });

    it('should leave Tab free to move focus on to the next control', () => {
      const event = new KeyboardEvent('keydown', { key: 'Tab', cancelable: true });

      component.handleKeydown(event);

      expect(event.defaultPrevented).toBe(false);
    });

    it('should leave the arrow keys that open and leave a submenu to the item that owns them', () => {
      component.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
      component.handleKeydown(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));

      expect(menuService.close).not.toHaveBeenCalled();
      expect(component['_keyManager'].onKeydown).not.toHaveBeenCalled();
    });
  });
});
