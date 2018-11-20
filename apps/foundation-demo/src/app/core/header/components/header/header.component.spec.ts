import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffNavbarModule } from '@daffodil/design';

import { FoundationHeaderComponent } from './header.component';

describe('FoundationHeaderComponent', () => {
  let component: FoundationHeaderComponent;
  let fixture: ComponentFixture<FoundationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffNavbarModule
      ],
      declarations: [ 
        FoundationHeaderComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
