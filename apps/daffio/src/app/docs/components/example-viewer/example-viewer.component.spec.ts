import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP } from './example-components-map.token';
import { DaffioExampleViewerComponent } from './example-viewer.component';
import { provideDaffioDocsTestingService } from '../../services/testing.provider';

@Component({
  template: `<p>Mock Example Component</p>`,
})
class MockExampleComponent {}

describe('@daffodil/daffio | DaffioExampleViewerComponent', () => {
  let component: DaffioExampleViewerComponent;
  let fixture: ComponentFixture<DaffioExampleViewerComponent>;
  let mockComponentMap: Map<string, () => Promise<any>>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioExampleViewerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('example', 'test-example');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
