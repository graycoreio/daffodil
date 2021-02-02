import {
  Component,
  Input,
  Injectable,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import { DaffioApiDocsListComponent } from '../../components/api-docs-list/api-docs-list.component';
import { DaffioApiDocReference } from '../../models/api-doc-reference';
import { DaffioApiDocsListViewComponent } from './api-docs-list-view.component';

@Injectable({ providedIn: 'root' })
class ActivatedRouteStub {
  data = new BehaviorSubject({});
};

@Component({
  template: '',
  selector: 'daffio-api-docs-list',
})
class MockDaffioApiDocsListComponent implements DaffioApiDocsListComponent {
  @Input() docsList: DaffioApiDocReference[] = [];
}

describe('DaffioApiDocsListViewComponent', () => {
  let component: DaffioApiDocsListViewComponent;
  let fixture: ComponentFixture<DaffioApiDocsListViewComponent>;
  let activatedRoute: ActivatedRouteStub;

  const stubDocsList = [
    {
      id: 'name1Component',
      title: 'title1Component',
      path: 'path1',
      docType: 'docType1',
      docTypeShorthand: 'dt',
    },
    {
      id: 'name2Module',
      title: 'title2Module',
      path: 'path2',
      docType: 'docType2',
      docTypeShorthand: 'dt',
    },
  ];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        MockDaffioApiDocsListComponent,
        DaffioApiDocsListViewComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useExisting: ActivatedRouteStub },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.inject(ActivatedRouteStub);
    activatedRoute.data.next({ reference: stubDocsList });

    fixture = TestBed.createComponent(DaffioApiDocsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize docsList$ from a route resolver', () => {
    const expected = cold('b', { b: stubDocsList });
    expect(component.docsList$).toBeObservable(expected);
  });

  describe('on <daffio-api-docs-list>', () => {
    let docsListComponent: DaffioApiDocsListComponent;

    beforeEach(() => {
      activatedRoute.data.next({ reference: stubDocsList });
      fixture.detectChanges();
      docsListComponent = fixture.debugElement.query(By.css('daffio-api-docs-list')).componentInstance;
    });

    it('should pass data down from `docsList$', () => {
      expect(docsListComponent.docsList).toEqual(stubDocsList);
    });
  });
});
