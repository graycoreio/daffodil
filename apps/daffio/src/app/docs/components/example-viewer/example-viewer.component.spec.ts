import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DAFFIO_EXAMPLES_CONTENT_COMPONENT_MAP } from './example-components-map.token';
import { DaffioExampleViewerComponent } from './example-viewer.component';

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

  describe('render', () => {
    it('should load the example component from the map', async () => {
      await component.render();
      fixture.detectChanges();

      expect(component.exampleComponent).toBe(MockExampleComponent);
    });

    it('should render the example component', async () => {
      await component.render();
      fixture.detectChanges();

      const exampleElement = fixture.debugElement.query(By.directive(MockExampleComponent));
      expect(exampleElement).toBeTruthy();
    });

    it('should set exampleComponent to undefined when example is not found in the map', async () => {
      fixture.componentRef.setInput('example', 'non-existent-example');
      fixture.detectChanges();

      await component.render();
      fixture.detectChanges();

      expect(component.exampleComponent).toBeUndefined();
    });
  });
});
