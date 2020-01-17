import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffCheckboxModule,
  DaffCheckboxSetModule,
  DaffFormFieldModule
} from '@daffodil/design';

import { DocsCheckboxSetComponent } from './checkbox-set.component';

describe('DocsCheckboxSetComponent', () => {
  let component: DocsCheckboxSetComponent;
  let fixture: ComponentFixture<DocsCheckboxSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsCheckboxSetComponent
      ],
      imports: [
        ReactiveFormsModule,

        DaffCheckboxModule,
        DaffCheckboxSetModule,
        DaffFormFieldModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsCheckboxSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
