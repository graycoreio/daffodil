import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffCheckboxModule } from '@daffodil/design';

import { DocsCheckboxComponent } from './checkbox.component';

describe('DocsCheckboxComponent', () => {
  let component: DocsCheckboxComponent;
  let fixture: ComponentFixture<DocsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsCheckboxComponent
      ],
      imports: [
        ReactiveFormsModule,

        DaffCheckboxModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
