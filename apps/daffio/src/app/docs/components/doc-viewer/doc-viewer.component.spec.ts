import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DaffArticleModule } from '@daffodil/design/article';
import {
  DaffApiDoc,
  DaffApiPackageDoc,
  DaffDoc,
  DaffDocsApiNavList,
  DaffGuideDoc,
} from '@daffodil/docs-utils';

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioApiPackageComponent } from '../../api/components/api-package/api-package.component';
import { DaffioDocsFactory } from '../../testing/factories/docs.factory';
import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';

@Component({
  template: `<daffio-doc-viewer [doc]="doc"></daffio-doc-viewer>`,
})
class WrapperComponent {
  doc: DaffDoc | DaffGuideDoc | DaffApiDoc | DaffApiPackageDoc;
}

describe('DaffioDocViewerComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  const docFactory = new DaffioDocsFactory();

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffArticleModule,
        DaffioDocsTableOfContentsModule,
        DaffioApiPackageComponent,
      ],
      declarations: [
        WrapperComponent,
        DaffioDocViewerComponent,
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
    wrapper.doc = docFactory.create();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('when the doc is an API package doc', () => {
    beforeEach(() => {
      wrapper.doc = <DaffApiPackageDoc>{
        id: 'name1Component',
        title: 'title1Component',
        path: 'path1',
        docType: 'package',
        description: '',
        children: [
          {
            id: 'name1ComponentChild',
            title: 'title1ComponentChild',
            path: 'path1/child',
            docType: 'docType1',
            children: [],
          },
        ],
      };
      fixture.detectChanges();
    });

    it('should render the package doc', () => {
      const apiChildren: DaffioApiPackageComponent = fixture.debugElement.query(By.directive(DaffioApiPackageComponent)).componentInstance;
      expect(apiChildren.doc).toEqual((<DaffApiPackageDoc>wrapper.doc));
    });
  });

  it('should render the contents of the doc as innerhtml', () => {
    wrapper.doc = docFactory.create({ contents: 'Some Content' });
    fixture.detectChanges();
    const articleElement = fixture.debugElement.query(By.css('daff-article')).nativeElement;
    expect(articleElement.innerHTML).toEqual(wrapper.doc.contents);
  });
});
