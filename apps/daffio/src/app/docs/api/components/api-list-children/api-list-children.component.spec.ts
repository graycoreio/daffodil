import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioApiListChildrenComponent } from './api-list-children.component';
import { DaffioApiReference } from '../../models/api-reference';

@Component({
  template: `
    <daffio-api-list-children [children]="apiListValue"></daffio-api-list-children>
  `,
  standalone: true,
  imports: [
    DaffioApiListChildrenComponent,
  ],
})
class WrapperComponent {
  apiListValue: Array<DaffioApiReference> = [
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
  ];
}

describe('DaffioApiListChildrenComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffioApiListChildrenComponent;
  let links;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-api-list-children')).componentInstance;
    links = fixture.debugElement.queryAll(By.css('a'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take children as input', () => {
    expect(component.children).toEqual(wrapper.apiListValue);
  });

  it('should render a link for every doc in children', () => {
    expect(links.length).toEqual(component.children.length);
  });

  describe('on link', () => {
    it('should set routerLink', () => {
      expect(links[0].attributes['ng-reflect-router-link']).toEqual(component.children[0].path);
    });
  });
});
