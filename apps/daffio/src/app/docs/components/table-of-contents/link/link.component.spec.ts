import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffDocFactory } from '@daffodil/docs/testing';
import { DaffDoc } from '@daffodil/docs-utils';

import { DaffioDocsTableOfContentsLinkComponent } from './link.component';
import { DaffioActiveHeaderService } from '../../../../core/dynamic-fragment/service';

describe('DaffioDocsTableOfContentsLinkComponent', () => {
  let component: DaffioDocsTableOfContentsLinkComponent;
  let fixture: ComponentFixture<DaffioDocsTableOfContentsLinkComponent>;
  let stubDaffioDoc: DaffDoc;
  let docFactory: DaffDocFactory;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffioDocsTableOfContentsLinkComponent,
      ],
      providers: [
        DaffioActiveHeaderService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    docFactory = TestBed.inject(DaffDocFactory);

    stubDaffioDoc = docFactory.create();
    fixture = TestBed.createComponent(DaffioDocsTableOfContentsLinkComponent);
    component = fixture.componentInstance;
    component.tableOfContents = stubDaffioDoc.tableOfContents;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a .daffio-docs-table-of-contents-link for each entry in the table of contents', () => {
    const tocItems = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents-link'));
    expect(tocItems.length).toEqual(stubDaffioDoc.tableOfContents.length);
  });

  it('should label each item with an indent level based on its toc level', () => {
    const tocLevel1 = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents-link.level-1'));
    const tocLevel2 = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents-link.level-2'));
    const tocLevel3 = fixture.debugElement.queryAll(By.css('.daffio-docs-table-of-contents-link.level-3'));
    expect(tocLevel1.length).toEqual(stubDaffioDoc.tableOfContents.filter(content => content.lvl === 1).length);
    expect(tocLevel2.length).toEqual(stubDaffioDoc.tableOfContents.filter(content => content.lvl === 2).length);
    expect(tocLevel3.length).toEqual(stubDaffioDoc.tableOfContents.filter(content => content.lvl === 3).length);
  });
});
