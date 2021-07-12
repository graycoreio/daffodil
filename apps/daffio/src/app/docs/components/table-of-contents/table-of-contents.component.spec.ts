import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffLinkSetModule } from '@daffodil/design';

import { DaffioDoc } from '../../models/doc';
import { DaffioDocsFactory } from '../../testing/factories/docs.factory';
import { DaffioDocsTableOfContentsComponent } from './table-of-contents.component';

describe('DaffioDocsTableOfContentsComponent', () => {
  let component: DaffioDocsTableOfContentsComponent;
  let fixture: ComponentFixture<DaffioDocsTableOfContentsComponent>;
  let stubDaffioDoc: DaffioDoc;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioDocsTableOfContentsComponent],
      imports: [
        RouterTestingModule,
        DaffLinkSetModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsTableOfContentsComponent);
    component = fixture.componentInstance;
    stubDaffioDoc = new DaffioDocsFactory().create();
    component.tableOfContents = stubDaffioDoc.tableOfContents.json;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a .daffio-docs-table-of-contents__item for each entry in the table of contents', () => {
    const tocItems = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents__item'));
    expect(tocItems.length).toEqual(stubDaffioDoc.tableOfContents.json.length);
  });

  it('should label each item with an indent level based on its toc level', () => {
    const tocLevel1 = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents__item--level-1'));
    const tocLevel2 = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents__item--level-2'));
    const tocLevel3 = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents__item--level-3'));
    expect(tocLevel1.length).toEqual(stubDaffioDoc.tableOfContents.json.filter(content => content.lvl === 1).length);
    expect(tocLevel2.length).toEqual(stubDaffioDoc.tableOfContents.json.filter(content => content.lvl === 2).length);
    expect(tocLevel3.length).toEqual(stubDaffioDoc.tableOfContents.json.filter(content => content.lvl === 3).length);
  });
});
