import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioLogoComponent, LogoType } from './logo.component';

@Component({
  template: `<daffio-logo [type]="type"></daffio-logo>`
})
class WrapperComponent {
  type: LogoType;
}

describe('DaffioLogoComponent', () => {
  let wrapper: WrapperComponent;
  let component: WrapperComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioLogoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    wrapper = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setting the type of the logo', () => {
    describe('when type is full', () => {
      it('should set "daffio-logo--full" on host element', () => {
        wrapper.type = LogoType.FULL;
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('svg'));
        expect(de.nativeElement.classList.contains('daffio-logo--full')).toEqual(true);
      });
    });

    describe('when type is icon', () => {
      it('should set "daffio-logo--icon" on host element', () => {
        wrapper.type = LogoType.ICON;
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('svg'));
        expect(de.nativeElement.classList.contains('daffio-logo--icon')).toEqual(true);
      });
    });
  });
});