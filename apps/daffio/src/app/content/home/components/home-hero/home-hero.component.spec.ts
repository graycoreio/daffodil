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
  standalone: false,
})
class WrapperComponent {}

describe('DaffioHomeHeroComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioHomeHeroComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioHomeHeroComponent,
      ],
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

  it('should add a class of "daffio-home-hero" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-home-hero': true,
    }));
  });
});
