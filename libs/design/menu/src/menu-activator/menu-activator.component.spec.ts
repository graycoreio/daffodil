import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { DaffMenuActivatorDirective } from './menu-activator.component';
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

  it('should open the menu when the button is clicked', () => {
    const menuService = TestBed.inject(DaffMenuService);
    (<BehaviorSubject<boolean>>menuService.open$).next(false);
    expect((<BehaviorSubject<boolean>>menuService.open$).value).toEqual(false);
    const event = new MouseEvent('click',{});
    de.nativeElement.dispatchEvent(event);
    expect((<BehaviorSubject<boolean>>menuService.open$).value).toEqual(true);
  });

  it('should focus the button when focus is called', () => {
    expect(document.activeElement).not.toEqual(de.nativeElement);
    const activator = de.injector.get(DaffMenuActivatorDirective);
    activator.focus();
    expect(document.activeElement).toEqual(de.nativeElement);
  });

  it('should be marked `open` when the menu is open', () => {
    const menuService = TestBed.inject(DaffMenuService);
    (<BehaviorSubject<boolean>>menuService.open$).next(true);
    fixture.detectChanges();
    const activator = de.injector.get(DaffMenuActivatorDirective);
    expect(activator.openClass).toBeTrue();
  });
});
