import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DaffioSimpleFooterComponent } from './simple-footer.component';

import { DaffContainerModule } from '@daffodil/design';
import { DaffLogoModule, DaffCopyrightModule } from '@daffodil/branding';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('DaffioSimpleFooterComponent', () => {
  let component: DaffioSimpleFooterComponent;
  let fixture: ComponentFixture<DaffioSimpleFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioSimpleFooterComponent,
        FontAwesomeModule
      ],
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffLogoModule,
        DaffCopyrightModule
      ]
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

  it('should add a class of `simple-footer` to its host', () => {
    expect(fixture.nativeElement.classList.contains('simple-footer')).toBeTruthy();
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
    const footerLinks = fixture.debugElement.queryAll(By.css('.simple-footer__link'));

    expect(footerLinks.length).toEqual(component.links.length);
  });
});
