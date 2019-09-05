import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioDocsTemplateComponent } from './docs-template.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DaffioDocsTemplateComponent', () => {
  let component: DaffioDocsTemplateComponent;
  let fixture: ComponentFixture<DaffioDocsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ DaffioDocsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
