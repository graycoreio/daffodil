import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffNavbarModule } from '@daffodil/design';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioHeaderComponent } from './header.component';

describe('DaffioHeaderComponent', () => {
  let component: DaffioHeaderComponent;
  let fixture: ComponentFixture<DaffioHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffContainerModule,
        DaffNavbarModule,
      ],
      declarations: [
        DaffioHeaderComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-container>', () => {
    it('should set size="md"', () => {
      const container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('md');
    });
  });
});
