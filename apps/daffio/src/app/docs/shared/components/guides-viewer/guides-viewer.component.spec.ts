import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffLinkSetModule } from '@daffodil/design';

import { DaffioGuidesViewerComponent } from './guides-viewer.component';

describe('GuidesViewerComponent', () => {
  let component: DaffioGuidesViewerComponent;
  let fixture: ComponentFixture<DaffioGuidesViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DaffioGuidesViewerComponent],
      imports: [
        RouterTestingModule,
        DaffLinkSetModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioGuidesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
