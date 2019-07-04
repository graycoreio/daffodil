import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, UrlSegment } from '@angular/router';

import { DaffioApiDocContainer } from './api-doc.component';
import { DaffioApiDocModule } from '../../components/api-doc/api-doc.module';
import { ApiDocsListComponentModule } from '../../components/api-docs-list/api-docs-list.module';
import { DaffioApiDocComponent } from '../../components/api-doc/api-doc.component';
import { DaffioDocService } from '../../services/api-doc.service';

describe('DaffioApiDocContainer', () => {
  let component: DaffioApiDocContainer;
  let fixture: ComponentFixture<DaffioApiDocContainer>;
  let docsApiComponent: DaffioApiDocComponent;
  const daffioDocServiceSpy = jasmine.createSpyObj('DaffioDocService', ['getDoc']);
  const stubDoc = {
    id: 'id',
    title: 'title',
    contents: 'contents'
  };

  const mockRoute: any = { snapshot: {} };
  mockRoute.url = of([new UrlSegment('part1', {}), new UrlSegment('part2', {})]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioApiDocModule,
        ApiDocsListComponentModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        DaffioApiDocContainer
      ],
      providers: [
        { provide: DaffioDocService, useValue: daffioDocServiceSpy },
        { provide: ActivatedRoute, useValue: mockRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioApiDocContainer);
    component = fixture.componentInstance;
    daffioDocServiceSpy.getDoc.and.returnValue(of(stubDoc));
    fixture.detectChanges();

    docsApiComponent = fixture.debugElement.query(By.css('daffio-api-doc')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daffio-api-doc>', () => {

    it('should set doc', () => {
      component.doc$.subscribe((doc) => {
        expect(docsApiComponent.doc).toEqual(doc)
      });
    });
  });

  describe('when the component initializes', () => {

    it('should get the document for the associated url', () => {
      expect(daffioDocServiceSpy.getDoc).toHaveBeenCalledWith('part1/part2');
    });

    it('should set the doc$ from the docService', () => {
      component.doc$.subscribe((doc) => {
        expect(doc).toEqual(stubDoc);
      });
    });
  });
});
