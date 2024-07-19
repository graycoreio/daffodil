import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffDocsComponentExamples } from '@daffodil/documentation';

import { DaffDocsExampleViewerContainer } from './example-viewer.component';

describe('DaffDocsExampleViewerContainer', () => {
  let component: DaffDocsExampleViewerContainer;
  let fixture: ComponentFixture<DaffDocsExampleViewerContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DaffDocsExampleViewerContainer,
      ],
      providers: [
        DaffDocsComponentExamples,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffDocsExampleViewerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
