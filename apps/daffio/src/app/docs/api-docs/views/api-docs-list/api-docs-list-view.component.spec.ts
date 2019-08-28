import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DaffioApiDocsListViewComponent } from './api-docs-list-view.component';
import { DaffioApiDocsListComponent } from '../../components/api-docs-list/api-docs-list.component';
import { DaffioApiDocsListModule } from '../../components/api-docs-list/api-docs-list.module';
import { hot, cold } from 'jasmine-marbles';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Component, Input } from '@angular/core';
import { DaffioApiDocReference } from '../../models/api-doc-reference';

class ActivatedRouteStub {
  data = new BehaviorSubject({});

  setData(data) {
    this.data.next(data);
  }
};

@Component({
  template: '',
  selector: 'daffio-api-docs-list'
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
      'id': 'name1Component',
      'title': 'title1Component',
      'path': 'path1',
      'docType': 'docType1',
      'docTypeShorthand': 'dt'
    },
    {
      'id': 'name2Module',
      'title': 'title2Module',
      'path': 'path2',
      'docType': 'docType2',
      'docTypeShorthand': 'dt'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MockDaffioApiDocsListComponent,
        DaffioApiDocsListViewComponent
      ],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioApiDocsListViewComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize docsList$ from a route resolver', () => {
    activatedRoute.setData({ reference: stubDocsList});

    const expected = cold('b', { b: stubDocsList });
    expect(component.docsList$).toBeObservable(expected);
  });

  describe('on <daffio-api-docs-list>', () => {
    let docsListComponent: DaffioApiDocsListComponent;

    beforeEach(() => {
      activatedRoute.setData({ reference: stubDocsList});
      fixture.detectChanges();
      docsListComponent = fixture.debugElement.query(By.css('daffio-api-docs-list')).componentInstance;
    });

    it('should pass data down from `docsList$', () => {
      expect(docsListComponent.docsList).toEqual(stubDocsList);
    });
  });
});
