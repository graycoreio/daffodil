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

import { DaffCopyrightModule } from '@daffodil/branding';
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

import { DaffioDocsFooterComponent } from './docs-footer.component';

@Component({
  template: `<daffio-docs-footer></daffio-docs-footer>`,
  imports: [
    DaffioDocsFooterComponent,
    DAFF_CONTAINER_COMPONENTS,
    DaffCopyrightModule,
  ],
})
class WrapperComponent { }

describe('DaffioDocsFooterComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffioDocsFooterComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daffio-docs-footer'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of "daffio-docs-footer" to the host element', () => {
    expect(de.classes).toEqual(jasmine.objectContaining({
      'daffio-docs-footer': true,
    }));
  });

  it('should show the copyright', () => {
    expect(fixture.debugElement.query(By.css('daff-branding-copyright'))).toBeTruthy();
  });
});
