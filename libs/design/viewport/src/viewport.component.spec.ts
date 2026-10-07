import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { DaffViewportComponent } from './viewport.component';

describe('@daffodil/design/viewport | DaffViewportComponent | Defaults', () => {
  let component: DaffViewportComponent;
  let fixture: ComponentFixture<DaffViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaffViewportComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DaffViewportComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-viewport" to the host element', () => {
    expect(fixture.debugElement.classes).toEqual(jasmine.objectContaining({
      'daff-viewport': true,
    }));
  });

  it('should default navPlacement to above', () => {
    expect(component.navPlacement()).toEqual('above');
  });
});
