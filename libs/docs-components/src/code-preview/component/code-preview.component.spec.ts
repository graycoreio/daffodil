import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffDocsCodePreviewComponent } from './code-preview.component';
import { DaffDocsCodeExample } from '../model/code-example';

@Component({})
class TestComponent {}

@Component({
  template: `
    <daff-docs-code-preview [example]="exampleComponent"></daff-docs-code-preview>
  `,
  standalone: true,
  imports: [
    DaffDocsCodePreviewComponent,
  ],
})
class WrapperComponent {
  exampleComponent: DaffDocsCodeExample = {
    component: TestComponent,
    files: [

      {
        name: 'article-blockquote.component.html',
        content: '<daff-article>\r\n  <blockquote>\r\n    This is a blockquote. This can be used for customer testimonals, document references, etc.\r\n    <cite>Name your quote source here.</cite>\r\n  </blockquote>\r\n</daff-article>',
        language: 'html',
      },
      {
        name: 'article-blockquote.component.ts',
        content: 'import { Component, OnInit } from \'@angular/core\';\r\n\r\n@Component({\r\n  selector: \'article-blockquote\',\r\n  templateUrl: \'./article-blockquote.component.html\'\r\n})\r\nexport class ArticleBlockquoteComponent {}\r\n',
        language: 'typescript',
      },
    ],

  };
}

describe('DaffDocsCodePreviewComponent', () => {
  let component: DaffDocsCodePreviewComponent;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  describe('for its inputs', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WrapperComponent);
      wrapper = fixture.componentInstance;
      component = fixture.debugElement.query(By.css('daff-docs-code-preview')).componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should take an example for an input', () => {
      expect(component.example).toBe(wrapper.exampleComponent);
    });
  });
});
