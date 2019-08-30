import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffLoadingIconModule } from '@daffodil/design';

import { LoadingIconComponent } from './loading-icon.component';

describe('LoadingIconComponent', () => {
  let component: LoadingIconComponent;
  let fixture: ComponentFixture<LoadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffLoadingIconModule
      ],
      declarations: [ LoadingIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
