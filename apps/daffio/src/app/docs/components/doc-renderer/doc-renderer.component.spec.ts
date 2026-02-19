import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffioDocRendererComponent } from './doc-renderer.component';
import { DaffioExampleViewerComponent } from '../example-viewer/example-viewer.component';

describe('@daffodil/daffio | DaffioDocRendererComponent', () => {
  let component: DaffioDocRendererComponent;
  let fixture: ComponentFixture<DaffioDocRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioDocRendererComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocRendererComponent);
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

  describe('when contents contains example placeholders', () => {
    it('should replace placeholders with example viewer components', () => {
      const contentWithExample = '<design-land-example-viewer-container example="test-example"></design-land-example-viewer-container>';
      fixture.componentRef.setInput('contents', contentWithExample);
      fixture.detectChanges();

      const exampleViewer = fixture.debugElement.query(By.directive(DaffioExampleViewerComponent));
      expect(exampleViewer).toBeTruthy();
    });

    it('should pass the example attribute to the example viewer', () => {
      const contentWithExample = '<design-land-example-viewer-container example="my-example-id"></design-land-example-viewer-container>';
      fixture.componentRef.setInput('contents', contentWithExample);
      fixture.detectChanges();

      const exampleViewer = fixture.debugElement.query(By.directive(DaffioExampleViewerComponent));
      expect(exampleViewer.componentInstance.example()).toBe('my-example-id');
    });

    it('should replace multiple example placeholders', () => {
      const contentWithExamples = `
        <design-land-example-viewer-container example="example-1"></design-land-example-viewer-container>
        <design-land-example-viewer-container example="example-2"></design-land-example-viewer-container>
      `;
      fixture.componentRef.setInput('contents', contentWithExamples);
      fixture.detectChanges();

      const exampleViewers = fixture.debugElement.queryAll(By.directive(DaffioExampleViewerComponent));
      expect(exampleViewers.length).toBe(2);
      expect(exampleViewers[0].componentInstance.example()).toBe('example-1');
      expect(exampleViewers[1].componentInstance.example()).toBe('example-2');
    });
  });
});
