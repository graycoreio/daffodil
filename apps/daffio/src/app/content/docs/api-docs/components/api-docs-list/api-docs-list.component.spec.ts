import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiDocsListComponentModule } from './api-docs-list.module';
import { ApiDocsListComponent } from './api-docs-list.component';
import { DaffioApiDocReference } from '../../models/api-doc-reference';

@Component({template: '<daffio-api-docs-list [docsList]="docsListValue"></daffio-api-docs-list>'})
class WrapperComponent {
  docsListValue: DaffioApiDocReference[] = [
    {
      name: 'name1',
      title: 'title1',
      path: 'path1',
      docType: 'docType1',
      securityRisk: false
    },
    {
      name: 'name2',
      title: 'title2',
      path: 'path2',
      docType: 'docType2',
      securityRisk: false
    }
  ];
}

describe('ApiDocsListComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: ApiDocsListComponent;
  let links;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ApiDocsListComponentModule,
        RouterTestingModule
      ],
      declarations: [
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-api-docs-list')).componentInstance;
    links = fixture.debugElement.queryAll(By.css('a'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take docsList as input', () => {
    expect(component.docsList).toEqual(wrapper.docsListValue);
  });

  it('should render a link for every doc in docsList', () => {

    expect(links.length).toEqual(component.docsList.length);
  });

  describe('on link', () => {

    it('should set routerLink', () => {
      expect(links[0].attributes['ng-reflect-router-link']).toEqual(component.docsList[0].path);
    });
  });
});
