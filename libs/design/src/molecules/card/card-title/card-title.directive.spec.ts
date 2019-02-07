import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffCardTitleDirective } from './card-title.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div daffCardTitle></div>'})
class WrapperComponent {}

describe('DaffCardTitleDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cardTitle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffCardTitleDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    cardTitle = fixture.debugElement.query(By.css('[daffCardTitle]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-card__title` to its host', () => {
    expect(cardTitle.nativeElement.classList.contains('daff-card__title')).toBeTruthy();
  });
});
