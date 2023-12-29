import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffModalModule } from '@daffodil/design/modal';

import { DesignLandModalComponent } from './modal.component';

describe('DesignLandModalComponent', () => {
  let component: DesignLandModalComponent;
  let fixture: ComponentFixture<DesignLandModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignLandModalComponent ],
      imports: [
        DaffModalModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignLandModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
