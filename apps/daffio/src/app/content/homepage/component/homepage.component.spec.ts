import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { DaffioHomepageComponent } from './homepage.component';
import { By } from '@angular/platform-browser';

import { DaffHeroModule } from '@daffodil/design';

describe('DaffioHomepageComponent', () => {
  let component: DaffioHomepageComponent;
  let fixture: ComponentFixture<DaffioHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffHeroModule
      ],
      declarations: [
        DaffioHomepageComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-hero>', () => {
    it('should set layout="centered"', () => {
      let hero = fixture.debugElement.query(By.css('daff-hero'));

      expect(hero.componentInstance.layout).toEqual('centered');
    });
  });
});
