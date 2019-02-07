import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffCardImageDirective } from './card-image.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<img daffCardImage>'})
class WrapperComponent {}

describe('DaffCardImageDirective', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let cardImage;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffCardImageDirective
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    cardImage = fixture.debugElement.query(By.css('[daffCardImage]'));
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-card__image` to its host', () => {
    expect(cardImage.nativeElement.classList.contains('daff-card__image')).toBeTruthy();
  });
});
