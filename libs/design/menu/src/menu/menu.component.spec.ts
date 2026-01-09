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

import { DaffMenuComponent } from './menu.component';
import { DaffMenuItemComponent } from '../menu-item/menu-item.component';
import { provideTestMenuService } from '../testing/dummy-service';

@Component({
  template: `<daff-menu></daff-menu>`,
  imports: [
    DaffMenuComponent,
    DaffMenuItemComponent,
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
});
