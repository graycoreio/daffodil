import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';
import { By } from '@angular/platform-browser';

import { DaffioApiDocViewComponent } from './doc-view.component';
import { DaffioDocFactory } from '../../../testing/factories/doc.factory';
import { DaffioApiDoc } from '../../models/api-doc';
import { DaffioApiDocModule } from '../../components/api-doc/api-doc.module';
import { DaffioApiDocComponent } from '../../components/api-doc/api-doc.component';

describe('DaffioApiDocViewComponent', () => {
  let component: DaffioApiDocViewComponent;
  let fixture: ComponentFixture<DaffioApiDocViewComponent>;
  const doc: DaffioApiDoc = {
    ...new DaffioDocFactory().create(),
    docType: "type",
    docTypeShorthand: "t"
  };
  const stubActivatedRoute = {
    data: new BehaviorSubject({})
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioApiDocViewComponent],
      imports: [
        DaffioApiDocModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: stubActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioApiDocViewComponent);
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

  it('should pass the down the observed doc to the `daffio-api-doc`', () => {
    const docViewer = fixture.debugElement.query(By.css('daffio-api-doc'));
    const docViewerComponent: DaffioApiDocComponent = docViewer.componentInstance;
    expect(docViewerComponent.doc).toEqual(doc);
  });
});
