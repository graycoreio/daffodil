import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffioHomeHeroComponent } from './home-hero.component';

@Component({
  template: `<daffio-home-hero></daffio-home-hero>`,
  imports: [DaffioHomeHeroComponent],
})
class WrapperComponent {}

describe('DaffioHomeHeroComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioHomeHeroComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [WrapperComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-home-hero'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
