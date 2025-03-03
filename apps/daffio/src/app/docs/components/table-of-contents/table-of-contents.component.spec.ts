import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffioDocsTableOfContentsComponent } from './table-of-contents.component';

describe('DaffioDocsTableOfContentsComponent', () => {
  let component: DaffioDocsTableOfContentsComponent;
  let fixture: ComponentFixture<DaffioDocsTableOfContentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioDocsTableOfContentsComponent],
      imports: [
        RouterTestingModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioDocsTableOfContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
