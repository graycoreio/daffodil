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
  apiListValue: DaffioApiReference[] = [
    {
      id: 'name1',
      title: 'title1',
      path: 'path1',
      docType: 'docType1',
      docTypeShorthand: 'doc',
    },
    {
      id: 'name2',
      title: 'title2',
      path: 'path2',
      docType: 'docType2',
      docTypeShorthand: 'doc',
    },
  ];
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

    expect(links.length).toEqual(component.apiList.length);
  });

  describe('on link', () => {

    it('should set routerLink', () => {
      expect(links[0].attributes['ng-reflect-router-link']).toEqual(component.apiList[0].path);
    });
  });
});
