import {
  Component,
  signal,
} from '@angular/core';
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
  DaffBreadcrumb,
  DaffDocTableOfContents,
} from '@daffodil/docs-utils';

import { DaffioDocViewerComponent } from './doc-viewer.component';
import { DaffioActiveHeaderService } from '../../../core/dynamic-fragment/service';
import { DaffioDocsTableOfContentsComponent } from '../table-of-contents/table-of-contents.component';

@Component({
  template: `<daffio-doc-viewer
		[toc]="tocValue()"
		[breadcrumbs]="breadcrumbsValue()"
		[sourcePath]="sourcePathValue()"
	></daffio-doc-viewer>`,
  imports: [
    DaffioDocViewerComponent,
  ],
})
class WrapperComponent {
  tocValue = signal<DaffDocTableOfContents>([]);
  breadcrumbsValue = signal<Array<DaffBreadcrumb>>([]);
  sourcePathValue = signal('');
}

describe('DaffioDocViewerComponent', () => {
  let component: DaffioDocViewerComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DAFF_ARTICLE_COMPONENTS,
        DaffioDocsTableOfContentsComponent,
        WrapperComponent,
      ],
      providers: [
        provideMockStore(),
        DaffioActiveHeaderService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.tocValue.set([{
      content: 'content',
      lvl: 1,
      slug: 'slug',
    }]);
    wrapper.breadcrumbsValue.set([]);
    wrapper.sourcePathValue.set('sourcePath');
    fixture.detectChanges();

    component = fixture.debugElement.query(By.directive(DaffioDocViewerComponent)).componentInstance;
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should take toc as an input', () => {
    expect(component.toc).toEqual(wrapper.tocValue());
  });

  it('should take breadcrumbs as an input', () => {
    expect(component.breadcrumbs).toEqual(wrapper.breadcrumbsValue());
  });

  it('should take sourcePath as an input', () => {
    expect(component.sourcePath()).toEqual(wrapper.sourcePathValue());
  });

  it('should render the edit link when sourcePath is defined', () => {
    const el: HTMLAnchorElement = fixture.debugElement.query(By.css('.daffio-doc-viewer__edit-button')).nativeElement;
    expect(el.href).toContain(wrapper.sourcePathValue());
  });

  it('should not render the edit link when sourcePath is undefined', () => {
    wrapper.sourcePathValue.set('');
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.daffio-doc-viewer__edit-button'))).toBeFalsy();
  });
});
