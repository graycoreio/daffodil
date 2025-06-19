import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DesignLandStickyComponent } from './sticky.component';

describe('DesignLandStickyComponent', () => {
  let component: DesignLandStickyComponent;
  let fixture: ComponentFixture<DesignLandStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignLandStickyComponent],
      providers: [
        provideRouter([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignLandStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 