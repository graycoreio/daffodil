import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffMessageBarActionsDirective } from './message-bar-actions.directive';

@Component({
  template: `
    <h3 daffMessageBarActions>Lorem Ipsum</h3>
  `
})
class WrapperComponent {}

describe('DaffMessageBarActionsDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffMessageBarActionsDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffMessageBarActions]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffMessageBarActions]',() => {
    it('should add a class of `daff-message-bar__actions` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-message-bar__actions')).toEqual(true);
    });
  });
}); 