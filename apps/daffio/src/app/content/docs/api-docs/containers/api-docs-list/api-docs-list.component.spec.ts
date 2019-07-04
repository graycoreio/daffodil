import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiDocsListContainer } from './api-docs-list.component';
import { ApiDocsListComponentModule } from '../../components/api-docs-list/api-docs-list.module';
import { ApiDocsListComponent } from '../../components/api-docs-list/api-docs-list.component';
import { DaffioDocService } from '../../services/api-doc.service';

describe('ApiDocsListContainer', () => {
  let component: ApiDocsListContainer;
  let fixture: ComponentFixture<ApiDocsListContainer>;
  let apiDocsListComponent: ApiDocsListComponent;
  const daffioDocServiceSpy = jasmine.createSpyObj('DaffioDocService', ['getDocsList']);
  const stubDocsList = [
    {items: [
      {
        'name': 'name1Component',
        'title': 'title1Component',
        'path': 'path1',
        'docType': 'docType1',
        'securityRisk': false
      },
      {
        'name': 'name2Module',
        'title': 'title2Module',
        'path': 'path2',
        'docType': 'docType2',
        'securityRisk': false
      }
    ]}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiDocsListComponentModule,
        RouterTestingModule
      ],
      declarations: [
        ApiDocsListContainer
      ],
      providers: [
        { provide: DaffioDocService, useValue: daffioDocServiceSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiDocsListContainer);
    component = fixture.componentInstance;
    daffioDocServiceSpy.getDocsList.and.returnValue(of(stubDocsList));
    fixture.detectChanges();

    apiDocsListComponent = fixture.debugElement.query(By.css('daffio-api-docs-list')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daffio-api-docs-list>', () => {

    it('should set docsList', () => {
      component.docsList$.subscribe((docsList) => {
        expect(apiDocsListComponent.docsList).toEqual(docsList);
      })
    });
  });
});
