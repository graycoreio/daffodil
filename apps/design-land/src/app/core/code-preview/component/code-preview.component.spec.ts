import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CodePreviewComponent } from './code-preview.component';
import { DesignLandCodePreviewModule } from './code-preview.module';

@Component({
  template: `
  <design-land-code-preview [example]="exampleComponent"></design-land-code-preview>
  `,
  standalone: false,
})
class WrapperComponent {
  exampleComponent = {
    element: 'article-blockquote-example',
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

describe('CodePreviewComponent', () => {
  let component: CodePreviewComponent;
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
      ],
      imports: [
        DesignLandCodePreviewModule,
      ],
    })
      .compileComponents();
  }));

  describe('for its inputs', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(WrapperComponent);
      wrapper = fixture.componentInstance;
      component = fixture.debugElement.query(By.css('design-land-code-preview')).componentInstance;
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
