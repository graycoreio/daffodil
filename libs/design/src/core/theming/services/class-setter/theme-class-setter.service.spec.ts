import { DOCUMENT } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { DaffodilThemingService } from '../theming.service';
import { DaffodilThemeClassSetterService } from './theme-class-setter.service';

describe('DaffodilThemeClassSetterService', () => {
  let service: DaffodilThemeClassSetterService;
  let doc: Document;
  let themeService: DaffodilThemingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffodilThemeClassSetterService,
        {
          provide: DaffodilThemingService, useValue: {
            theme: new BehaviorSubject('dark'),
            getTheme() {
              return this.theme;
            },
            goDark() {
              this.theme.next('dark');
            },
            blastMyEyes() {
              this.theme.next('light');
            },
          },
        },
      ],
    });
    themeService = TestBed.inject(DaffodilThemingService);
    service = TestBed.inject(DaffodilThemeClassSetterService);
    doc = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    service.destroy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not modify classes upon initial injection', () => {
    expect(doc.body.className).toEqual('');
  });

  it('should set the class on the body', () => {
    service.beginThemeSync();
    expect(doc.body.className).toContain('daff-theme-dark');
  });

  it('should only set one theme class on the body at a time', () => {
    service.beginThemeSync();
    expect(doc.body.className).toEqual('daff-theme-dark');
    themeService.blastMyEyes();
    expect(doc.body.className).toEqual('daff-theme-light');
    themeService.goDark();
    expect(doc.body.className).toEqual('daff-theme-dark');
  });
});
