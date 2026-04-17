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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {
  DAFF_MENU_CONFIG,
  DaffMenuConfig,
} from '../../config/menu-config';
import { DaffMenuItemComponent } from '../../menu-item/menu-item.component';
import { DaffMenuService } from '../../services/menu.service';
import { provideTestMenuService } from '../../testing/dummy-service';
import { DaffMenuComponent } from '../menu.component';

@Component({
  template: `
    <daff-menu>
      <a href="/test" daff-menu-item id="focused">Test</a>
      <button daff-menu-item id="not-focused">Test 2</button>
    </daff-menu>
  `,
  imports: [
    DaffMenuComponent,
    DaffMenuItemComponent,
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
        NoopAnimationsModule,
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

  it('should focus the first focusable child when menu is opened', () => {
    expect(document.activeElement).toEqual(de.query(By.css('#focused')).nativeElement);
  });

  describe('Keyboard Events', () => {
    let menuService: DaffMenuService;

    beforeEach(() => {
      menuService = TestBed.inject(DaffMenuService);
      spyOn(menuService, 'close');
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
  });
});
