import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffTabsComponent } from '@daffodil/design/tabs';
import {
  DaffDocKind,
  DaffPackageGuideDoc,
} from '@daffodil/docs-utils';

import { DaffioDocsDesignComponentContentComponent } from './component-content.component';
import { DaffioDocArticleComponent } from '../../../components/doc-article/component';

@Component({
  template: `<daffio-docs-design-component-content
		[doc]="docValue"
	></daffio-docs-design-component-content>`,
  imports: [
    DaffioDocsDesignComponentContentComponent,
  ],
})
class WrapperComponent {
  docValue: DaffPackageGuideDoc;
}

describe('DaffioDocsDesignComponentContentComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioDocsDesignComponentContentComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let tabsComponent: DaffTabsComponent;
  let articleComponent: DaffioDocArticleComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        WrapperComponent,
      ],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.docValue = {
      id: 'id',
      title: 'title',
      symbols: [],
      apiToc: [{
        content: 'apiToc',
        lvl: 2,
        slug: 'apiToc',
      }],
      tableOfContents: [{
        content: 'toc',
        lvl: 2,
        slug: 'toc',
      }],
      api: ['<div id="api">api</div>'],
      contents: '<div id="contents">contents</div>',
      longDescription: '<div id="longDescription">longDescription</div>',
      breadcrumbs: [],
      kind: DaffDocKind.COMPONENT,
    };
    fixture.detectChanges();

    component = fixture.debugElement.query(By.directive(DaffioDocsDesignComponentContentComponent)).componentInstance;
    tabsComponent = fixture.debugElement.query(By.directive(DaffTabsComponent)).componentInstance;
    articleComponent = fixture.debugElement.query(By.directive(DaffioDocArticleComponent)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title in an h1', () => {
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerText).toEqual(wrapper.docValue.title);
  });

  it('should render the long description', () => {
    expect(fixture.debugElement.query(By.css('#longDescription')).nativeElement.innerText).toEqual('longDescription');
  });

  describe('on the usage tab', () => {
    beforeEach(() => {
      tabsComponent.select(component.USAGE_TAB_ID);
      fixture.detectChanges();
    });

    it('should render the content', () => {
      expect(fixture.debugElement.query(By.css('#contents')).nativeElement.innerText).toEqual('contents');
    });

    it('should pass the toc to the article', () => {
      expect(articleComponent.toc).toEqual(wrapper.docValue.tableOfContents);
    });
  });

  describe('on the API tab', () => {
    beforeEach(() => {
      tabsComponent.select(component.API_TAB_ID);
      fixture.detectChanges();
    });

    it('should render the api', () => {
      expect(fixture.debugElement.query(By.css('#api')).nativeElement.innerText).toEqual('api');
    });

    it('should pass the API toc to the article', () => {
      expect(articleComponent.toc).toEqual(wrapper.docValue.apiToc);
    });
  });
});
