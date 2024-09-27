import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffTreeComponent } from '../tree.component';

describe('@daffodil/design/tree | DaffTreeComponent | Defaults', () => {
  let component: DaffTreeComponent;
  let fixture: ComponentFixture<DaffTreeComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DaffTreeComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffTreeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('daff-tree'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have sane defaults', () => {
    expect(component.flatTree).toEqual([]);
    expect(component.tree).toEqual(undefined);
  });
});
