import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffLogoModule,
  DaffCopyrightModule,
} from '@daffodil/branding';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioFooterComponent } from './footer.component';

@Component({
  template: `<daffio-footer></daffio-footer>`,
  standalone: false,
})
class WrapperComponent { }

describe('DaffioFooterComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioFooterComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioFooterComponent,
      ],
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffLogoModule,
        DaffCopyrightModule,
        FontAwesomeModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-footer'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-footer" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-footer': true,
    }));
  });

  it('should show the copyright', () => {
    expect(fixture.debugElement.query(By.css('daff-branding-copyright'))).toBeTruthy();
  });

  describe('on <daff-branding-logo>', () => {
    it('should set type="icon"', () => {
      const logo = fixture.debugElement.query(By.css('daff-branding-logo'));

      expect(logo.componentInstance.type).toEqual('icon');
    });
  });
});
