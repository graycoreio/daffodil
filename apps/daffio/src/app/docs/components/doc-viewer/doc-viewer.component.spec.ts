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

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioApiListChildrenComponent } from '../../api/components/api-list-children/api-list-children.component';
import { DaffioApiReference } from '../../api/models/api-reference';
import { DaffioDoc } from '../../models/doc';
import { DaffioDocsFactory } from '../../testing/factories/docs.factory';
import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';

@Component({
  template: `<daffio-doc-viewer [doc]="doc"></daffio-doc-viewer>`,
})
class WrapperComponent {
  doc: DaffioDoc | DaffioApiReference;
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
        DaffioApiListChildrenComponent,
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
      wrapper.doc = {
        id: 'name1Component',
        title: 'title1Component',
        path: 'path1',
        docType: 'package',
        docTypeShorthand: 'pk',
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
      };
      fixture.detectChanges();
    });

    it('should render the package name', () => {
      expect(fixture.debugElement.query(By.css('.daffio-doc-viewer__content h1')).nativeElement.innerText).toEqual(wrapper.doc.title);
    });

    it('should render the package doc children', () => {
      const apiChildren: DaffioApiListChildrenComponent = fixture.debugElement.query(By.directive(DaffioApiListChildrenComponent)).componentInstance;
      expect(apiChildren.children).toEqual((<DaffioApiReference>wrapper.doc).children);
    });
  });

  it('should render the contents of the doc as innerhtml', () => {
    wrapper.doc = docFactory.create({ contents: 'Some Content' });
    fixture.detectChanges();
    const articleElement = fixture.debugElement.query(By.css('daff-article')).nativeElement;
    expect(articleElement.innerHTML).toEqual(wrapper.doc.contents);
  });
});
