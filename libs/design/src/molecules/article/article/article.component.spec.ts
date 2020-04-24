import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

import { DaffArticleComponent } from './article.component';
import { By } from '@angular/platform-browser';

@Component ({
  template: `<daff-article></daff-article>`
})

class WrapperComponent {}

describe('DaffArticleComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let de: DebugElement;
  let wrapper: WrapperComponent;
  let component: DaffArticleComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffArticleComponent,
        WrapperComponent
       ]
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
