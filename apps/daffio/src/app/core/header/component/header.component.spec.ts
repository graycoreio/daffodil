import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioHeaderComponent } from './header.component';
import { DaffContainerModule } from '@daffodil/design';
import { DaffNavbarModule } from 'libs/design/src';

describe('DaffioHeaderComponent', () => {
  let component: DaffioHeaderComponent;
  let fixture: ComponentFixture<DaffioHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffContainerModule,
        DaffNavbarModule
      ],
      declarations: [ 
        DaffioHeaderComponent
      ]
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
});