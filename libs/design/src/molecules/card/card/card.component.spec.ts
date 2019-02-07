import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffCardComponent } from './card.component';

@Component({template: `<daff-card></daff-card>`})

class WrapperComponent {}

describe('DaffCardComponent', () => {
  let wrapper: WrapperComponent;
  let daffCard: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffCardComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    daffCard = fixture.debugElement.query(By.css('daff-card'));
    wrapper = daffCard.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of `daff-card` to its host', () => {
    expect(daffCard.nativeElement.classList.contains('daff-card')).toBeTruthy();
  });
});
