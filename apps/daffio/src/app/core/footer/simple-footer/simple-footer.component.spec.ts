import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffLogoModule,
  DaffCopyrightModule,
} from '@daffodil/branding';
import { DaffContainerModule } from '@daffodil/design';

import { DaffioSimpleFooterComponent } from './simple-footer.component';



describe('DaffioSimpleFooterComponent', () => {
  let component: DaffioSimpleFooterComponent;
  let fixture: ComponentFixture<DaffioSimpleFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(DaffioSimpleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `daffio-simple-footer` to its host', () => {
    expect(fixture.nativeElement.classList.contains('daffio-simple-footer')).toBeTruthy();
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

  it('renders a .simple-footer__link for every links defined', () => {
    const footerLinks = fixture.debugElement.queryAll(By.css('.daffio-simple-footer__link'));

    expect(footerLinks.length).toEqual(component.links.length);
  });
});
