import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffInputComponent } from './input.component';
import { By } from '@angular/platform-browser';

describe('DaffInputComponent', () => {
  let component: DaffInputComponent;
  let fixture: ComponentFixture<DaffInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaffInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('daff-input',() => {
    it('should set `daff-input` on host element', () => {
      expect(fixture.debugElement.query(By.css('[daff-input]')).nativeElement.classList.contains('daff-input')).toEqual(true);
    });
  });
});
