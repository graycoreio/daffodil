import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffMessageBarDismissalDirective } from './message-bar-dismissal.directive';

@Component({
  template: `
    <h3 daffMessageBarDismissal>Lorem Ipsum</h3>
  `
})
class WrapperComponent {}

describe('DaffMessageBarDismissalDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffMessageBarDismissalDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffMessageBarDismissal]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffMessageBarDismissal]',() => {
    it('should add a class of `daff-message-bar__dismissal` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-message-bar__dismissal')).toEqual(true);
    });
  });
}); 