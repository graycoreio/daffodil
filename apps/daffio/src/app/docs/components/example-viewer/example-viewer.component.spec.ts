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

import { DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP } from './example-components-map.token';
import { DaffioExampleViewerPreviewComponent } from './example-viewer-preview/example-viewer-preview.component';
import { DaffioExampleViewerComponent } from './example-viewer.component';
import { DaffioDocsService } from '../../services/docs.service';
import { provideDaffioDocsTestingService } from '../../services/testing.provider';

@Component({
  template: `<p>Mock Example Component</p>`,
})
class MockExampleComponent {}

describe('@daffodil/daffio | DaffioExampleViewerComponent', () => {
  let component: DaffioExampleViewerComponent;
  let fixture: ComponentFixture<DaffioExampleViewerComponent>;
  let mockComponentMap: Map<string, () => Promise<any>>;
  let getSpy: BehaviorSubject<any>;
  let sourceFileFactory: DaffDocsDesignExampleFactory;
  let sourceFile: DaffDocsDesignExample;

  beforeEach(waitForAsync(() => {
    mockComponentMap = new Map([
      ['test-example', () => Promise.resolve(MockExampleComponent)],
    ]);

    TestBed.configureTestingModule({
      imports: [
        DaffioExampleViewerComponent,
      ],
      providers: [
        {
          provide: DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP,
          useValue: mockComponentMap,
        },
        provideDaffioDocsTestingService(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    const appRef = TestBed.inject(ApplicationRef);
    sourceFileFactory = TestBed.inject(DaffDocsDesignExampleFactory);

    sourceFile = sourceFileFactory.create();
    getSpy = new BehaviorSubject(undefined);
    spyOn(TestBed.inject(DaffioDocsService), 'get').and.returnValue(getSpy);
    fixture = TestBed.createComponent(DaffioExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('example', 'test-example');
    fixture.detectChanges();
    await appRef.whenStable();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render daffio-example-viewer-preview when the example has not loaded', () => {
    expect(fixture.debugElement.query(By.css('daffio-example-viewer-code'))).toBeFalsy();
  });

  it('should render daffio-example-viewer-preview when the example and source files have loaded', fakeAsync(() => {
    getSpy.next(sourceFile);
    fixture.detectChanges();
    const preview: DaffioExampleViewerPreviewComponent = fixture.debugElement.query(By.directive(DaffioExampleViewerPreviewComponent)).componentInstance;
    expect(preview).toBeTruthy();
    expect(preview.exampleComponent()).toEqual(MockExampleComponent);
  }));

  it('should not render the preview when the example does not exist', () => {
    fixture.componentRef.setInput('example', 'i-dont-exist');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(DaffioExampleViewerPreviewComponent))).toBeFalsy();
  });

  describe('when simple is true', () => {
    beforeEach(() => {
      fixture.componentRef.setInput('simple', true);
    });

    it('should not render daffio-example-viewer-code', () => {
      expect(fixture.debugElement.query(By.css('daffio-example-viewer-code'))).toBeFalsy();
    });

    it('should render daffio-example-viewer-preview even when the source files have not loaded as long as the example is loaded', () => {
      const preview: DaffioExampleViewerPreviewComponent = fixture.debugElement.query(By.directive(DaffioExampleViewerPreviewComponent)).componentInstance;
      expect(preview).toBeTruthy();
      expect(preview.exampleComponent()).toEqual(MockExampleComponent);
    });
  });
});
