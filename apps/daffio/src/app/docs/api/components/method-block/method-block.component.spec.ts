import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffioDocsApiMethodBlockComponent } from './method-block.component';

describe('DaffioDocsApiMethodBlockComponent', () => {
  let component: DaffioDocsApiMethodBlockComponent;
  let fixture: ComponentFixture<DaffioDocsApiMethodBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffioDocsApiMethodBlockComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffioDocsApiMethodBlockComponent);
    component = fixture.componentInstance;
    // TODO: actually test when we have doc factories
    component.method = <any>{ parameterDocs: []};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
