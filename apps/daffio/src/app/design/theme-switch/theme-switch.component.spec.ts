import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

import {
  DaffTheme,
  DaffThemingService,
} from '@daffodil/design';

import {
  DaffioThemeSwitchComponent,
  DAFFIO_THEME_SWITCH_TO_DARK_LABEL,
  DAFFIO_THEME_SWITCH_TO_LIGHT_LABEL,
} from './theme-switch.component';

describe('DaffioThemeSwitchComponent', () => {
  let component: DaffioThemeSwitchComponent;
  let fixture: ComponentFixture<DaffioThemeSwitchComponent>;

  let themeService: jasmine.SpyObj<DaffThemingService>;
  let theme$: BehaviorSubject<DaffTheme>;

  beforeEach(waitForAsync(() => {
    theme$ = new BehaviorSubject(DaffTheme.Light);
    themeService = jasmine.createSpyObj(DaffThemingService, ['getTheme', 'switchTheme']);
    themeService.getTheme.and.returnValue(theme$);

    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
      ],
      declarations: [
        DaffioThemeSwitchComponent,
      ],
      providers: [
        { provide: DaffThemingService, useValue: themeService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioThemeSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the switch label', () => {
    describe('when the theme is dark', () => {
      beforeEach(() => {
        theme$.next(DaffTheme.Dark);
        fixture.detectChanges();
      });

      it('should show the switch to light label', () => {
        const el: HTMLButtonElement = fixture.debugElement.query(By.css('button[theme-toggle]')).nativeElement;
        expect(el.attributes.getNamedItem('aria-label').value).toEqual(DAFFIO_THEME_SWITCH_TO_LIGHT_LABEL);
      });
    });

    describe('when the theme is light', () => {
      beforeEach(() => {
        theme$.next(DaffTheme.Light);
        fixture.detectChanges();
      });

      it('should show the switch to dark label', () => {
        const el: HTMLButtonElement = fixture.debugElement.query(By.css('button[theme-toggle]')).nativeElement;
        expect(el.attributes.getNamedItem('aria-label').value).toEqual(DAFFIO_THEME_SWITCH_TO_DARK_LABEL);
      });
    });
  });

  describe('the visual indication of the theme switcher', () => {
    describe('when the theme is dark', () => {
      beforeEach(() => {
        theme$.next(DaffTheme.Dark);
        fixture.detectChanges();
      });

      it('should show the sun icon', () => {
        const el: FaIconComponent = fixture.debugElement.query(By.css('fa-icon')).componentInstance;
        expect(el.icon).toEqual(faSun);
      });
    });

    describe('when the theme is light', () => {
      beforeEach(() => {
        theme$.next(DaffTheme.Light);
        fixture.detectChanges();
      });

      it('should show the moon icon', () => {
        const el: FaIconComponent = fixture.debugElement.query(By.css('fa-icon')).componentInstance;
        expect(el.icon).toEqual(faMoon);
      });
    });
  });

  it('should switch the theme when clicked', () => {
    component.onButtonClick();
    expect(themeService.switchTheme).toHaveBeenCalledWith();
  });
});
