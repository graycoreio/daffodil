import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioApiListComponent } from './api-list.component';
import { DaffioApiReference } from '../../models/api-reference';

@Component({ template: '<daffio-api-list [apiList]="apiListValue"></daffio-api-list>' })
class WrapperComponent {
  apiListValue: DaffioApiReference = {
    id: 'id',
    title: 'title',
    docType: '',
    docTypeShorthand: '',
    children: [
      {
        id: 'name1Component',
        title: 'title1Component',
        path: 'path1',
        docType: 'docType1',
        docTypeShorthand: 'dt',
        children: [],
      },
      {
        id: 'name2Module',
        title: 'title2Module',
        path: 'path2',
        docType: 'docType2',
        docTypeShorthand: 'dt',
        children: [],
      },
    ],
  };
}

describe('DaffioApiListComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffioApiListComponent;
  let links;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffContainerModule,
      ],
      declarations: [
        WrapperComponent,
        DaffioApiListComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-api-list')).componentInstance;
    links = fixture.debugElement.queryAll(By.css('a'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take apiList as input', () => {
    expect(component.apiList).toEqual(wrapper.apiListValue);
  });

  it('should render a link for every doc in apiList', () => {

    expect(links.length).toEqual(component.apiList.children.length);
  });

  describe('on link', () => {

    it('should set routerLink', () => {
      expect(links[0].attributes['ng-reflect-router-link']).toEqual(component.apiList.children[0].path);
    });
  });
});
