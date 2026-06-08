import { OverlayContainer } from '@angular/cdk/overlay';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faCircleHalfStroke,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

import {
  DaffTheme,
  DaffThemingService,
} from '@daffodil/design';
import { DaffSfThemeToggleComponent } from '@daffodil/storefront/theme-toggle';

describe('DaffSfThemeToggleComponent', () => {
  let component: DaffSfThemeToggleComponent;
  let fixture: ComponentFixture<DaffSfThemeToggleComponent>;

  let themeService: jasmine.SpyObj<DaffThemingService>;
  let preference$: BehaviorSubject<DaffTheme>;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  beforeEach(waitForAsync(() => {
    preference$ = new BehaviorSubject(DaffTheme.System);
    themeService = jasmine.createSpyObj(DaffThemingService, [
      'getThemePreference',
      'lightMode',
      'darkMode',
      'systemMode',
    ]);
    themeService.getThemePreference.and.returnValue(preference$);

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FaIconComponent,
        DaffSfThemeToggleComponent,
      ],
      providers: [
        {
          provide: DaffThemingService,
          useValue: themeService,
        },
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffSfThemeToggleComponent);
    component = fixture.componentInstance;

    overlayContainer = TestBed.inject(OverlayContainer);
    overlayContainerElement = overlayContainer.getContainerElement();

    fixture.detectChanges();
  });

  afterEach(() => {
    overlayContainer.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('the activator button', () => {
    it('should label the menu', () => {
      const el: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(el.attributes.getNamedItem('aria-label').value).toBe(`Change theme. Current theme: ${DaffTheme.System}`);
    });

    describe('when the preference follows the system', () => {
      beforeEach(() => {
        preference$.next(DaffTheme.System);
        fixture.detectChanges();
      });

      it('should show the desktop icon', () => {
        const el: FaIconComponent = fixture.debugElement.query(By.css('fa-icon')).componentInstance;
        expect(el.icon()).toEqual(faCircleHalfStroke);
      });
    });

    describe('when the preference is light', () => {
      beforeEach(() => {
        preference$.next(DaffTheme.Light);
        fixture.detectChanges();
      });

      it('should show the sun icon', () => {
        const el: FaIconComponent = fixture.debugElement.query(By.css('fa-icon')).componentInstance;
        expect(el.icon()).toEqual(faSun);
      });
    });

    describe('when the preference is dark', () => {
      beforeEach(() => {
        preference$.next(DaffTheme.Dark);
        fixture.detectChanges();
      });

      it('should show the moon icon', () => {
        const el: FaIconComponent = fixture.debugElement.query(By.css('fa-icon')).componentInstance;
        expect(el.icon()).toEqual(faMoon);
      });
    });
  });

  describe('the theme menu', () => {
    let items: HTMLButtonElement[];

    beforeEach(() => {
      const activator: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
      activator.click();
      fixture.detectChanges();

      items = Array.from(overlayContainerElement.querySelectorAll<HTMLButtonElement>('[daff-menu-item]'));
    });

    it('should render an option for system, light, and dark', () => {
      expect(items.length).toBe(3);
    });

    it('should follow the system theme when the system option is clicked', () => {
      items[0].click();
      expect(themeService.systemMode).toHaveBeenCalledWith();
    });

    it('should set the theme to light when the light option is clicked', () => {
      items[1].click();
      expect(themeService.lightMode).toHaveBeenCalledWith();
    });

    it('should set the theme to dark when the dark option is clicked', () => {
      items[2].click();
      expect(themeService.darkMode).toHaveBeenCalledWith();
    });
  });
});
