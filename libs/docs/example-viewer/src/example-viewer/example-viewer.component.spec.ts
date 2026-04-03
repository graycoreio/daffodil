import {
  ApplicationRef,
  Component,
} from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { DaffDocsDesignExampleFactory } from '@daffodil/docs/testing';
import { DaffDocsDesignExample } from '@daffodil/docs-utils';

import { DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP } from './component-map';
import { DaffDocsExampleViewerPreviewComponent } from './example-viewer-preview/example-viewer-preview.component';
import { DaffDocsExampleViewerComponent } from './example-viewer.component';
import { DAFF_DOCS_EXAMPLE_SERVICE } from './service/example-docs.service';
import { DaffDocsExampleServiceInterface } from './service/example-docs.service.interface';

@Component({
  template: `<p>Mock Example Component</p>`,
})
class MockExampleComponent {}

describe('@daffodil/docs | DaffDocsExampleViewerComponent', () => {
  let component: DaffDocsExampleViewerComponent;
  let fixture: ComponentFixture<DaffDocsExampleViewerComponent>;
  let mockComponentMap: Map<string, () => Promise<any>>;
  let getSpy: BehaviorSubject<any>;
  let mockExampleService: jasmine.SpyObj<DaffDocsExampleServiceInterface>;
  let sourceFileFactory: DaffDocsDesignExampleFactory;
  let sourceFile: DaffDocsDesignExample;

  beforeEach(waitForAsync(() => {
    mockComponentMap = new Map([
      ['test-example', () => Promise.resolve(MockExampleComponent)],
    ]);
    getSpy = new BehaviorSubject(undefined);
    mockExampleService = jasmine.createSpyObj<DaffDocsExampleServiceInterface>('DaffDocsExampleService', {
      get: getSpy,
    });

    TestBed.configureTestingModule({
      imports: [
        DaffDocsExampleViewerComponent,
      ],
      providers: [
        {
          provide: DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP,
          useValue: mockComponentMap,
        },
        {
          provide: DAFF_DOCS_EXAMPLE_SERVICE,
          useValue: mockExampleService,
        },
      ],
    })
      .overrideComponent(DaffDocsExampleViewerComponent, {
        add: {
          providers: [
            {
              provide: DAFF_DOCS_EXAMPLES_CONTENT_COMPONENT_MAP,
              useValue: mockComponentMap,
            },
          ],
        },
      })
      .compileComponents();
  }));

  beforeEach(async () => {
    const appRef = TestBed.inject(ApplicationRef);
    sourceFileFactory = TestBed.inject(DaffDocsDesignExampleFactory);

    sourceFile = sourceFileFactory.create();
    fixture = TestBed.createComponent(DaffDocsExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('example', 'test-example');
    fixture.detectChanges();
    await appRef.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render daff-docs-example-viewer-preview when the example has not loaded', () => {
    expect(fixture.debugElement.query(By.css('daff-docs-example-viewer-code'))).toBeFalsy();
  });

  it('should render daff-docs-example-viewer-preview when the example and source files have loaded', fakeAsync(() => {
    getSpy.next(sourceFile);
    fixture.detectChanges();
    const preview: DaffDocsExampleViewerPreviewComponent = fixture.debugElement.query(By.directive(DaffDocsExampleViewerPreviewComponent)).componentInstance;
    expect(preview).toBeTruthy();
    expect(preview.exampleComponent()).toEqual(MockExampleComponent);
  }));

  it('should not render the preview when the example does not exist', () => {
    fixture.componentRef.setInput('example', 'i-dont-exist');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(DaffDocsExampleViewerPreviewComponent))).toBeFalsy();
  });

  describe('when simple is true', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('simple', true);
    });

    it('should not render daff-docs-example-viewer-code', () => {
      expect(fixture.debugElement.query(By.css('daff-docs-example-viewer-code'))).toBeFalsy();
    });

    it('should render daff-docs-example-viewer-preview even when the source files have not loaded as long as the example is loaded', () => {
      const preview: DaffDocsExampleViewerPreviewComponent = fixture.debugElement.query(By.directive(DaffDocsExampleViewerPreviewComponent)).componentInstance;
      expect(preview).toBeTruthy();
      expect(preview.exampleComponent()).toEqual(MockExampleComponent);
    });
  });
});
