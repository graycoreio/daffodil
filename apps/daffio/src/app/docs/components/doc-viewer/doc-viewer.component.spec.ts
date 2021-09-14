import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffArticleModule } from '@daffodil/design';

import { DaffioDoc } from '../../models/doc';
import { DaffioDocsFactory } from '../../testing/factories/docs.factory';
import { DaffioDocsTableOfContentsModule } from '../table-of-contents/table-of-contents.module';
import { DaffioDocViewerComponent } from './doc-viewer.component';

@Component({
  template: `<daffio-doc-viewer [doc]="doc"></daffio-doc-viewer>`,
})
class WrapperComponent {
  doc: DaffioDoc;
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
      ],
      declarations: [
        WrapperComponent,
        DaffioDocViewerComponent,
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

  it('should render the contents of the doc as innerhtml', () => {
    wrapper.doc = docFactory.create({ contents: 'Some Content' });
    fixture.detectChanges();
    const articleElement = fixture.debugElement.query(By.css('daff-article')).nativeElement;
    expect(articleElement.innerHTML).toEqual(wrapper.doc.contents);
  });
});
