import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  discardPeriodicTasks,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffioTerminalAnimationComponent } from './terminal-animation.component';
import { DaffioTerminalStep } from './terminal-step.type';

@Component({
  template: `<daffio-terminal-animation [script]="script" label="Test session" [holdDuration]="1000"></daffio-terminal-animation>`,
  imports: [DaffioTerminalAnimationComponent],
})
class WrapperComponent {
  script: DaffioTerminalStep[] = [
    { delay: 100, add: [{ segments: [{ text: 'first' }]}]},
    { delay: 200, add: [{ segments: [{ text: 'second' }]}]},
    { delay: 300, remove: 1, add: [{ segments: [{ text: 'done', tone: 'success' }]}]},
  ];
}

describe('DaffioTerminalAnimationComponent', () => {
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  const renderedLines = () =>
    de.queryAll(By.css('.daffio-terminal-animation__line')).map((line) => line.nativeElement.textContent.trim());

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WrapperComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('daffio-terminal-animation'));
  });

  it('should add a class of "daffio-terminal-animation" to the host element', () => {
    fixture.detectChanges();

    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-terminal-animation': true,
    }));
  });

  it('should label the host as a figure', () => {
    fixture.detectChanges();

    expect(de.attributes['role']).toEqual('figure');
    expect(de.attributes['aria-label']).toEqual('Test session');
  });

  it('should expose the end state of the session as text', () => {
    fixture.detectChanges();

    expect(de.query(By.css('.daffio-terminal-animation__visually-hidden')).nativeElement.textContent).toEqual('first\ndone');
  });

  it('should hide the animated terminal from assistive tech', () => {
    fixture.detectChanges();

    expect(de.query(By.css('.daffio-terminal-animation__body')).attributes['aria-hidden']).toEqual('true');
  });

  it('should play the script in order and loop', fakeAsync(() => {
    fixture.detectChanges();
    // the animation starts in afterNextRender, so render once more to pick it up
    fixture.detectChanges();
    expect(renderedLines()).toEqual([]);

    tick(100);
    fixture.detectChanges();
    expect(renderedLines()).toEqual(['first']);

    tick(200);
    fixture.detectChanges();
    expect(renderedLines()).toEqual(['first', 'second']);

    tick(300);
    fixture.detectChanges();
    expect(renderedLines()).toEqual(['first', 'done']);

    tick(1000);
    fixture.detectChanges();
    expect(renderedLines()).toEqual([]);

    fixture.destroy();
    discardPeriodicTasks();
  }));
});
