import { CommonModule } from '@angular/common';
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  BrowserModule,
  By,
} from '@angular/platform-browser';

import { DaffSelectOptionDirective } from './option.directive';

@Component({
  template: `
    <div daffSelectOption>Content</div>
  `,
})
class WrapperComponent {}

describe('DaffSelectOptionDirective', () => {
  let selectItemContent: DaffSelectOptionDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffSelectOptionDirective,
        WrapperComponent,
      ],
      imports: [
        CommonModule,
        BrowserModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffSelectOption]'));
    selectItemContent = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(selectItemContent).toBeTruthy();
  });
});
