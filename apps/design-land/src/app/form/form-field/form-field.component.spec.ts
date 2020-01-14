import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DocsFormFieldComponent } from './form-field.component';

import {
  DaffFormFieldModule,
  DaffInputModule
} from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DocsFormFieldComponent', () => {
  let component: DocsFormFieldComponent;
  let fixture: ComponentFixture<DocsFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DocsFormFieldComponent
      ],
      imports: [
        ReactiveFormsModule,

        DaffFormFieldModule,
        DaffInputModule,
        FontAwesomeModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
