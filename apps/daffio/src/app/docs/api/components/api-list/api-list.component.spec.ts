import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioApiListComponent } from './api-list.component';
import { DaffioApiReference } from '../../models/api-reference';
import { DaffioApiListChildrenComponent } from '../api-list-children/api-list-children.component';

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
        children: [
          {
            id: 'name1ComponentChild',
            title: 'title1ComponentChild',
            path: 'path1/child',
            docType: 'docType1',
            docTypeShorthand: 'dt',
            children: [],
          },
        ],
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
  let links: Array<DebugElement>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffioApiListChildrenComponent,
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
    links = fixture.debugElement.queryAll(By.css('.daffio-api-list__package-name')).map((de) => de.query(By.directive(RouterLink)));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take apiList as input', () => {
    expect(component.apiList).toEqual(wrapper.apiListValue);
  });

  it('should render a link for every doc in apiList', () => {
    expect(links.length).toEqual(wrapper.apiListValue.children.length);
  });

  describe('on link', () => {
    it('should set routerLink', () => {
      wrapper.apiListValue.children.forEach((doc, i) => {
        expect(links[i].attributes['ng-reflect-router-link']).toEqual(<any>doc.path);
      });
    });
  });
});
