import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import {
  DaffColorableDirective,
  DaffStatusableDirective,
} from '@daffodil/design';
import {
  DaffBadgeComponent,
  DaffBadgeSizableDirective,
} from '@daffodil/design/badge';

describe('@daffodil/design/badge | DaffBadgeComponent | Defaults', () => {
  let component: DaffBadgeComponent;
  let fixture: ComponentFixture<DaffBadgeComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DaffBadgeComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffBadgeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daff-badge" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daff-badge': true,
    }));
  });

  it('should set the default color to `light`', () => {
    expect(de.injector.get(DaffColorableDirective).color).toEqual('light');
  });

  it('should set the default appearance to `filled`', () => {
    expect(component.appearance()).toEqual('filled');
  });

  it('should set the default size to `md`', () => {
    expect(de.injector.get(DaffBadgeSizableDirective).size).toEqual('md');
  });

  it('should not set a default status', () => {
    expect(de.injector.get(DaffStatusableDirective).status).toBeFalsy();
  });
});
