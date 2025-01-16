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

import { DaffioSimpleFooterComponent } from './simple-footer.component';

@Component({
  template: `<daffio-simple-footer></daffio-simple-footer>`,
  standalone: false,
})
class WrapperComponent { }

describe('DaffioSimpleFooterComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioSimpleFooterComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        DaffioSimpleFooterComponent,
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
    de = fixture.debugElement.query(By.css('daffio-simple-footer'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-simple-footer" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-simple-footer': true,
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
