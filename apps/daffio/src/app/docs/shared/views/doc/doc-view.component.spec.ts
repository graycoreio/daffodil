import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';

import { DaffioDocFactory } from '../../../testing/factories/doc.factory';
import { DaffioDocViewerComponent } from '../../components/doc-viewer/doc-viewer.component';
import { DaffioDoc } from '../../models/doc';
import { DaffioDocViewComponent } from './doc-view.component';

@Component({template: '', selector: 'daffio-doc-viewer'})
class MockDaffioDocViewerComponent {
	@Input() doc: DaffioDoc
}

describe('DaffioDocViewComponent', () => {
  let component: DaffioDocViewComponent;
  let fixture: ComponentFixture<DaffioDocViewComponent>;
  const doc: DaffioDoc = new DaffioDocFactory().create();
  const stubActivatedRoute = {
    data: new BehaviorSubject({}),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
				DaffioDocViewComponent,
				MockDaffioDocViewerComponent
			],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocViewComponent);
    component = fixture.componentInstance;
    stubActivatedRoute.data.next({ doc });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize `doc$` to the resolved doc from the activated route', () => {
    const expected = cold('a', { a: doc });
    expect(component.doc$).toBeObservable(expected);
  });

  it('should pass the down the observed doc to the `daffio-doc-viewer`', () => {
    const docViewer = fixture.debugElement.query(By.css('daffio-doc-viewer'));
    const docViewerComponent: DaffioDocViewerComponent = docViewer.componentInstance;
    expect(docViewerComponent.doc).toEqual(doc);
  });
});
