import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioApiDocModule,
        ApiDocsListComponentModule,
        RouterTestingModule
      ],
      declarations: [
        DaffioApiDocContainer
      ],
      providers: [
        { provide: DaffioDocService, useValue: daffioDocServiceSpy }
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
      expect(docsApiComponent.doc).toEqual(component.doc);
    });
  });

  describe('when doc is null', () => {

    it('should not render daffio-api-doc', () => {
      daffioDocServiceSpy.getDoc.and.returnValue(of(null));
      component.ngOnInit();
      fixture.detectChanges();
      const docsApiElement = fixture.debugElement.query(By.css('daffio-api-doc'));

      expect(docsApiElement).toBeNull();
    });
  });
});
