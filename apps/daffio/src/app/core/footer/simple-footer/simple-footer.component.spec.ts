import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DaffioSimpleFooterComponent } from './simple-footer.component';

import { DaffContainerModule } from '@daffodil/design';
import { DaffLogoModule } from '@daffodil/branding';

describe('DaffioSimpleFooterComponent', () => {
  let component: DaffioSimpleFooterComponent;
  let fixture: ComponentFixture<DaffioSimpleFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioSimpleFooterComponent
      ],
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffLogoModule
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

  describe('on <daff-logo>', () => {
    it('should set type="icon"', () => {
      const logo = fixture.debugElement.query(By.css('daff-logo'));

      expect(logo.componentInstance.type).toEqual('icon');
    });
  });

  it('renders a .simple-footer__link for every links defined', () => {
    const footerLinks = fixture.debugElement.queryAll(By.css('.simple-footer__link'));

    expect(footerLinks.length).toEqual(component.links.length);
  });
});
