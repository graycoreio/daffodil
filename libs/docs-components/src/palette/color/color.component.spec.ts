import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffDocsAssetService } from '@daffodil/documentation';

import { DaffDocsColorPalettesComponent } from './color.component';

describe('@daffodil/docs-components | DaffDocsColorPalettesComponent', () => {
  let component: DaffDocsColorPalettesComponent;
  let fixture: ComponentFixture<DaffDocsColorPalettesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffDocsColorPalettesComponent,
      ],
      providers: [
        {
          provide: DaffDocsAssetService,
          useValue: jasmine.createSpyObj('DaffDocsAssetService', {
            get: of(),
          }),
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffDocsColorPalettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
