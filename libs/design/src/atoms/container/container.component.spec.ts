import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffContainerComponent } from './container.component';

describe('DaffContainerComponent', () => {
  let component: DaffContainerComponent;
  let fixture: ComponentFixture<DaffContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  describe('setting the size of the container', () => {
    describe('when size is small', () => {
      it('should set "daff-container--small" on host element', () => {
        component.size = 'small';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-container--small')).toEqual(true);
      });
    });

    describe('when size is medium', () => {
      it('should set "daff-container--medium" on host element', () => {
        component.size = 'medium';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-container--medium')).toEqual(true);
      });
    });

    describe('when size is large', () => {
      it('should set "daff-container--large" on host element', () => {
        component.size = 'large';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-container--large')).toEqual(true);
      });
    });

    describe('when size is xlarge', () => {
      it('should set "daff-container--xlarge" on host element', () => {
        component.size = 'large';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-container--xlarge')).toEqual(true);
      });
    });
  });
});
