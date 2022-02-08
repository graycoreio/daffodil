import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { DaffodilThemingService } from '../../services/theming.service';
import { DaffodilThemeEnum } from '../../types/theme';
import { DaffodilThemeSwitchComponent } from './theme-switch.component';

describe('DaffodilThemeSwitchComponent', () => {
  let component: DaffodilThemeSwitchComponent;
  let fixture: ComponentFixture<DaffodilThemeSwitchComponent>;

  let themeService: jasmine.SpyObj<DaffodilThemingService>;

  beforeEach(async () => {
    themeService = jasmine.createSpyObj(DaffodilThemingService, ['getTheme', 'switchTheme']);
    themeService.getTheme.and.returnValue(of(DaffodilThemeEnum.Light));

    await TestBed.configureTestingModule({
      declarations: [ DaffodilThemeSwitchComponent ],
      providers: [
        { provide: DaffodilThemingService, useValue: themeService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffodilThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the switch label', () => {
    it('should change as the theme changes', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      testScheduler.run((helpers) => {
        const { cold, expectObservable, hot } = helpers;

        themeService.getTheme.and.returnValue(cold('-a--b--c---|', { a: DaffodilThemeEnum.Light, b: DaffodilThemeEnum.Dark, c: DaffodilThemeEnum.Light }));

        expectObservable(component.ariaLabel$).toBe('-a--b--c---|', { a: 'Enable dark mode', b: 'Enable light mode', c: 'Enable dark mode' });
      });
    });
  });

  describe('the visual indication of the theme switcher', () => {
    it('should change as the theme changes', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });

      testScheduler.run((helpers) => {
        const { cold, expectObservable, hot } = helpers;

        themeService.getTheme.and.returnValue(cold('-a--b--c---|', { a: DaffodilThemeEnum.Light, b: DaffodilThemeEnum.Dark, c: DaffodilThemeEnum.Light }));

        expectObservable(component.icon$).toBe('-a--b--c---|', { a: faMoon, b: faSun, c: faMoon });
      });
    });
  });

  it('should switch the theme when clicked', () => {
    component.onButtonClick();
    expect(themeService.switchTheme).toHaveBeenCalledWith();
  });
});
