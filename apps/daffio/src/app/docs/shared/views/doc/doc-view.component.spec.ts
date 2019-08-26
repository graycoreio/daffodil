import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

import { DaffioDocViewComponent } from './doc-view.component';
import { DaffioDocViewerModule } from '../../components/doc-viewer/doc-viewer.module';
import { DaffioDocFactory } from '../../../testing/factories/doc.factory';
import { DaffioDoc } from '../../models/doc';
import { cold } from 'jasmine-marbles';
import { By } from '@angular/platform-browser';
import { DaffioDocViewerComponent } from '../../components/doc-viewer/doc-viewer.component';

describe('DaffioDocViewComponent', () => {
  let component: DaffioDocViewComponent;
  let fixture: ComponentFixture<DaffioDocViewComponent>;
  const doc: DaffioDoc = new DaffioDocFactory().create();
  const stubActivatedRoute = {
    data: new BehaviorSubject({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioDocViewComponent],
      imports: [
        DaffioDocViewerModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocViewComponent);
    component = fixture.componentInstance;
    stubActivatedRoute.data.next({ doc: doc });
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
