import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffArticleComponent } from './article.component';

@Component ({
  template: `<daff-article></daff-article>`,
  imports: [
    DaffArticleComponent,
  ],
})

class WrapperComponent {}

describe('@daffodil/design/article | DaffArticleComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffArticleComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-article'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('<daff-article>', () => {
    it('should add a class of "daff-article" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-article': true,
      }));
    });
  });
});
