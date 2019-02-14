import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffHeroTitleDirective } from './hero-title.directive';

@Component({
  template: `
    <h1 daffHeroTitle>Lorem Ipsum</h1>
  `
})
class WrapperComponent {}

describe('DaffHeroTitleDirective', () => {
  let wrapper: WrapperComponent;
  let heroTitle: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffHeroTitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    heroTitle = fixture.debugElement.query(By.css('[daffHeroTitle]'));
    wrapper = heroTitle.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffHeroTitle]',() => {
    it('should add a class of `daff-hero__title` to its host element', () => {
      expect(heroTitle.nativeElement.classList.contains('daff-hero__title')).toEqual(true);
    });
  });
}); 