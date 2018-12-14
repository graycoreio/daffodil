import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffListComponent } from './list.component';

describe('DaffListComponent', () => {
  let component: DaffListComponent;
  let fixture: ComponentFixture<DaffListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setting the type of the list', () => {

    describe('when list is link', () => {
      it('should set "daff-list--link" on host element', () => {
        component.type = 'link';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-list--link')).toEqual(true);
      });
    });

    describe('when list is multi-line', () => {
      it('should set "daff-list--multi-line" on host element', () => {
        component.type = 'multi-line';
        fixture.detectChanges();
        expect(fixture.nativeElement.classList.contains('daff-list--multi-line')).toEqual(true);
      });
    });
  });

});
