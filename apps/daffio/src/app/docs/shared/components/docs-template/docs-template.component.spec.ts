import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioDocsTemplateComponent } from './docs-template.component';

describe('DaffioDocsTemplateComponent', () => {
  let component: DaffioDocsTemplateComponent;
  let fixture: ComponentFixture<DaffioDocsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
