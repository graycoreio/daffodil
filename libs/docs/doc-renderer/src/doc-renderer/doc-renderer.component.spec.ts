import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  provideRouter,
  Router,
} from '@angular/router';
import { of } from 'rxjs';

import {
  DAFF_DOCS_EXAMPLE_SERVICE,
  DaffDocsExampleViewerComponent,
} from '@daffodil/docs/example-viewer';

import { DaffDocsDocRendererComponent } from './doc-renderer.component';

describe('@daffodil/docs | DaffDocsDocRendererComponent', () => {
  let component: DaffDocsDocRendererComponent;
  let fixture: ComponentFixture<DaffDocsDocRendererComponent>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffDocsDocRendererComponent,
      ],
      providers: [
        provideRouter([]),
        {
          provide: DAFF_DOCS_EXAMPLE_SERVICE,
          useValue: { get: () => of(undefined) },
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
    fixture = TestBed.createComponent(DaffDocsDocRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when contents is set', () => {
    it('should render the HTML content inside the article', () => {
      const testContent = '<p>Test content</p>';
      fixture.componentRef.setInput('contents', testContent);
      fixture.detectChanges();

      const article = fixture.debugElement.query(By.css('daff-article'));
      expect(article.nativeElement.innerHTML).toContain('Test content');
    });
  });

  it('should handle relative links with angular router', () => {
    const testContent = '<a data-anchor href="docs/test">Relative link</a>';
    fixture.componentRef.setInput('contents', testContent);
    fixture.detectChanges();

    const anchor: HTMLAnchorElement = fixture.debugElement.nativeElement.querySelector('[data-anchor]');
    anchor.click();
    fixture.detectChanges();
    expect(router.navigateByUrl).toHaveBeenCalledWith('docs/test');
  });

  it('should not absolute links with angular router', () => {
    const testContent = '<a data-anchor href="javascript://example.com/docs/test">Absolute link</a>';
    fixture.componentRef.setInput('contents', testContent);
    fixture.detectChanges();

    const anchor: HTMLAnchorElement = fixture.debugElement.nativeElement.querySelector('[data-anchor]');
    anchor.click();
    fixture.detectChanges();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  describe('when contents contains example placeholders', () => {
    it('should replace placeholders with example viewer components', () => {
      const contentWithExample = '<daff-docs-example-viewer example="test-example"></daff-docs-example-viewer>';
      fixture.componentRef.setInput('contents', contentWithExample);
      fixture.detectChanges();

      const exampleViewer = fixture.debugElement.query(By.directive(DaffDocsExampleViewerComponent));
      expect(exampleViewer).toBeTruthy();
    });

    it('should pass the example attribute to the example viewer', () => {
      const contentWithExample = '<daff-docs-example-viewer example="my-example-id"></daff-docs-example-viewer>';
      fixture.componentRef.setInput('contents', contentWithExample);
      fixture.detectChanges();

      const exampleViewer = fixture.debugElement.query(By.directive(DaffDocsExampleViewerComponent));
      expect(exampleViewer.componentInstance.example()).toBe('my-example-id');
    });

    it('should replace multiple example placeholders', () => {
      const contentWithExamples = `
        <daff-docs-example-viewer example="example-1"></daff-docs-example-viewer>
        <daff-docs-example-viewer example="example-2" simple></daff-docs-example-viewer>
      `;
      fixture.componentRef.setInput('contents', contentWithExamples);
      fixture.detectChanges();

      const exampleViewers = fixture.debugElement.queryAll(By.directive(DaffDocsExampleViewerComponent));
      expect(exampleViewers.length).toBe(2);
      expect(exampleViewers[0].componentInstance.example()).toBe('example-1');
      expect(exampleViewers[1].componentInstance.example()).toBe('example-2');
      expect(exampleViewers[1].componentInstance.simple()).toBeTrue();
    });
  });
});
