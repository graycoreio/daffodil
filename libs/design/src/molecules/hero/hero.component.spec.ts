import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffHeroComponent } from './hero.component';

describe('DaffHeroComponent', () => {
  let component: DaffHeroComponent;
  let fixture: ComponentFixture<DaffHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffHeroComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setting the layout of the hero', () => {
    describe('when layout is centered', () => {
      it('should set "daff-hero--centered" on host element', () => {
        component.layout = 'centered';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--centered')).toEqual(true);
      });
    });

    describe('when layout is a grid', () => {
      it('should set "daff-hero--grid" on host element', () => {
        component.layout = 'grid';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--grid')).toEqual(true);
      });
    });
  });

  describe('setting the size of the hero', () => {
    describe('when size is fullscreen', () => {
      it('should set "daff-hero--fullscreen" on host element', () => {
        component.size = 'fullscreen';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--fullscreen')).toEqual(true);
      });
    });

    describe('when size is small', () => {
      it('should set "daff-hero--small" on host element', () => {
        component.size = 'small';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--small')).toEqual(true);
      });
    });
  });

  describe('setting the color of the hero', () => {
    describe('when color is primary', () => {
      it('should set "daff-hero--primary" on host element', () => {
        component.color = 'primary';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--primary')).toEqual(true);
      });
    });

    describe('when color is accent', () => {
      it('should set "daff-hero--accent" on host element', () => {
        component.color = 'accent';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--accent')).toEqual(true);
      });
    });

    describe('when color is gray', () => {
      it('should set "daff-hero--gray" on host element', () => {
        component.color = 'gray';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--gray')).toEqual(true);
      });
    });

    describe('when color is black', () => {
      it('should set "daff-hero--black" on host element', () => {
        component.color = 'black';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--black')).toEqual(true);
      });
    });

    describe('when color is white', () => {
      it('should set "daff-hero--white" on host element', () => {
        component.color = 'white';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-hero--white')).toEqual(true);
      });
    });
  });

});
