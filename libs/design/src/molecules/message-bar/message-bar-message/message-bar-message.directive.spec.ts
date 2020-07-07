import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DaffMessageBarMessageDirective } from './message-bar-message.directive';

@Component({
  template: `
    <h3 daffMessageBarMessage>Lorem Ipsum</h3>
  `
})
class WrapperComponent {}

describe('DaffMessageBarMessageDirective', () => {
  let wrapper: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffMessageBarMessageDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('[daffMessageBarMessage]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  describe('[daffMessageBarMessage]',() => {
    it('should add a class of `daff-message-bar__message` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-message-bar__message')).toEqual(true);
    });
  });
}); 