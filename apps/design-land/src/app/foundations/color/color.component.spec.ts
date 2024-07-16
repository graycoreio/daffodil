import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { of } from 'rxjs';

import { DaffDocsAssetService } from '@daffodil/documentation';

import { DesignLandColorComponent } from './color.component';

describe('DesignLandColorComponent', () => {
  let component: DesignLandColorComponent;
  let fixture: ComponentFixture<DesignLandColorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DesignLandColorComponent,
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
    fixture = TestBed.createComponent(DesignLandColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
