import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffSidebarModule } from '@daffodil/design';

import { DesignLandAppComponent } from './app.component';

describe('DesignLandAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSidebarModule,
        RouterTestingModule
      ],
      declarations: [
        DesignLandAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DesignLandAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
