import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { EMPTY } from 'rxjs';

import { DaffArticleHeadingLinkComponent } from './heading-link.component';

describe('DaffArticleHeadingLinkComponent', () => {
  let component: DaffArticleHeadingLinkComponent;
  let fixture: ComponentFixture<DaffArticleHeadingLinkComponent>;
  let button: HTMLButtonElement;
  let anchor: HTMLAnchorElement;
  let writeTextSpy: jasmine.Spy;
  let routerStub: Partial<Router>;

  beforeEach(async () => {
    writeTextSpy = jasmine.createSpy('writeText').and.resolveTo();
    routerStub = {
      url: '/docs/guide#fragment',
      createUrlTree: jasmine.createSpy('createUrlTree').and.returnValue({}),
      serializeUrl: jasmine.createSpy('serializeUrl').and.returnValue('/docs/guide#test-fragment'),
      events: EMPTY,
    };

    await TestBed.configureTestingModule({
      imports: [DaffArticleHeadingLinkComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {}, queryParams: {}},
          },
        },
      ],
    }).compileComponents();

    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: writeTextSpy },
      writable: true,
      configurable: true,
    });

    fixture = TestBed.createComponent(DaffArticleHeadingLinkComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('fragment', 'test-fragment');
    fixture.componentRef.setInput('label', 'Test Heading');
    fixture.detectChanges();

    button = fixture.debugElement.query(By.css('button')).nativeElement;
    anchor = fixture.debugElement.query(By.css('a')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    expect(anchor.textContent).toContain('Test Heading');
  });

  it('should have an aria-label for accessibility', () => {
    expect(button.getAttribute('aria-label')).toContain('Copy link');
  });

  it('should display the link icon by default', () => {
    const icon = fixture.debugElement.query(By.css('fa-icon'));
    expect(icon).toBeTruthy();
  });

  it('should set the anchor fragment', () => {
    expect(anchor.getAttribute('href')).toBe('/docs/guide#test-fragment');
  });

  describe('when the button is clicked', () => {
    it('should copy the full URL with fragment to clipboard', async () => {
      await component.copyLink();
      expect(writeTextSpy).toHaveBeenCalledWith(
        jasmine.stringMatching(/#test-fragment$/),
      );
    });

    it('should update copied state', fakeAsync(() => {
      component.copyLink();
      tick();
      expect(component['copied']()).toBe(true);
    }));

    it('should reset copied state after 1.5 seconds', fakeAsync(() => {
      component.copyLink();
      tick();
      expect(component['copied']()).toBe(true);

      tick(1500);
      expect(component['copied']()).toBe(false);
    }));

    it('should update aria-label when copied', fakeAsync(() => {
      component.copyLink();
      tick();
      fixture.detectChanges();
      expect(button.getAttribute('aria-label')).toContain('Copied link');
    }));
  });

  describe('when copying fails', () => {
    let consoleErrorSpy: jasmine.Spy;

    beforeEach(() => {
      consoleErrorSpy = spyOn(console, 'error');
      writeTextSpy.and.rejectWith('error');
    });

    it('should log an error', async () => {
      await component.copyLink();
      expect(consoleErrorSpy).toHaveBeenCalledWith('Failed to copy text: ', 'error');
    });
  });
});
