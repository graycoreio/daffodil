import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { hot, cold } from 'jasmine-marbles';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { DaffioApiDocsListViewComponent } from './api-docs-list-view.component';
import { DaffioApiDocsListComponent } from '../../components/api-docs-list/api-docs-list.component';
import { DaffioApiDocReference } from '../../models/api-doc-reference';
import { BehaviorSubject } from 'rxjs';

@Component({
  template: '',
  selector: 'daffio-api-docs-list'
})
class MockDaffioApiDocsListComponent implements DaffioApiDocsListComponent, OnInit {
  @Input() docsList: DaffioApiDocReference[] = [];

  ngOnInit() {
    console.log(this.docsList);
  }
}

describe('DaffioApiDocsListViewComponent', () => {
  let component: DaffioApiDocsListViewComponent;
  let fixture: ComponentFixture<DaffioApiDocsListViewComponent>;
  let activatedRoute: ActivatedRoute;

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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MockDaffioApiDocsListComponent,
        DaffioApiDocsListViewComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = TestBed.inject(ActivatedRoute);
    activatedRoute.data = new BehaviorSubject({reference: stubDocsList});

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
      (activatedRoute.data as BehaviorSubject<any>).next({ reference: stubDocsList});
      fixture.detectChanges();
      docsListComponent = fixture.debugElement.query(By.css('daffio-api-docs-list')).componentInstance;
    });

    it('should pass data down from `docsList$', () => {
      expect(docsListComponent.docsList).toEqual(stubDocsList);
    });
  });
});
