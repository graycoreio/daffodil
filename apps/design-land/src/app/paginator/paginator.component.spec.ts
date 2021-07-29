import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffPaginatorModule } from '@daffodil/design';

import { DesignLandPaginatorComponent } from './paginator.component';

describe('DesignLandPaginatorComponent', () => {
  let component: DesignLandPaginatorComponent;
  let fixture: ComponentFixture<DesignLandPaginatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffPaginatorModule,
      ],
      declarations: [
        DesignLandPaginatorComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
