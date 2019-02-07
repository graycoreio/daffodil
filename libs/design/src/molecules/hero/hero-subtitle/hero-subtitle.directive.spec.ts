import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffHeroSubtitleDirective } from './hero-subtitle.directive';

@Component({
  template: `
    <h1 daffHeroSubtitle>Lorem Ipsum</h1>
  `
})
class WrapperComponent {}

describe('DaffHeroSubtitleDirective', () => {
  let wrapper: WrapperComponent;
  let heroSubtitle: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffHeroSubtitleDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    heroSubtitle = fixture.debugElement.query(By.css('[daffHeroSubtitle]'));
    wrapper = heroSubtitle.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffHeroSubtitle]',() => {
    it('should add a class of `daff-hero__subtitle` to its host element', () => {
      expect(heroSubtitle.nativeElement.classList.contains('daff-hero__subtitle')).toEqual(true);
    });
  });
}); 