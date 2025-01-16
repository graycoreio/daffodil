import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';
import {
  DaffApiPackageDoc,
  DaffBreadcrumb,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioDocArticleComponent } from './component';
import { DaffioApiPackageComponent } from '../../api/components/api-package/api-package.component';
import { DaffioDocsFactory } from '../../testing/factories/docs.factory';
import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';

@Component({
  template: `<daffio-doc-article
		[toc]="tocValue"
		[breadcrumbs]="breadcrumbsValue"
	></daffio-doc-article>`,
  standalone: false,
})
class WrapperComponent {
  tocValue: DaffDocTableOfContents;
  breadcrumbsValue: Array<DaffBreadcrumb>;
}

describe('DaffioDocArticleComponent', () => {
  let component: DaffioDocArticleComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  const docFactory = new DaffioDocsFactory();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DAFF_ARTICLE_COMPONENTS,
        DaffioDocsTableOfContentsModule,
        DaffioApiPackageComponent,
      ],
      declarations: [
        WrapperComponent,
        DaffioDocArticleComponent,
      ],
      providers: [
        provideMockStore(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.tocValue = [];
    wrapper.breadcrumbsValue = [];
    fixture.detectChanges();

    component = fixture.debugElement.query(By.directive(DaffioDocArticleComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should take toc as an input', () => {
    expect(component.toc).toEqual(wrapper.tocValue);
  });

  it('should take breadcrumbs as an input', () => {
    expect(component.breadcrumbs).toEqual(wrapper.breadcrumbsValue);
  });
});
