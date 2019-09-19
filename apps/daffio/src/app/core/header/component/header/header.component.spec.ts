import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffioHeaderComponent } from './header.component';
import {
  DaffContainerModule,
  DaffNavbarModule
} from '@daffodil/design';

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

  it('should add a class of `daffio-header` to its host element', () => {
    expect(fixture.debugElement.classes).toEqual(jasmine.objectContaining({
      'daffio-header': true,
    }));
  })
});