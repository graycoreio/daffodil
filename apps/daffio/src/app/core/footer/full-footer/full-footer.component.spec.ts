import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DaffioFullFooterComponent } from './full-footer.component';
import { DaffioNewsletterModule } from '../../../newsletter/newsletter.module';

import {
  DaffContainerModule,
  DaffListModule
} from '@daffodil/design';
import { DaffLogoModule } from '@daffodil/branding';

describe('DaffioFullFooterComponent', () => {
  let component: DaffioFullFooterComponent;
  let fixture: ComponentFixture<DaffioFullFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioFullFooterComponent
      ],
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffLogoModule,
        DaffListModule,
        DaffioNewsletterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioFullFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `full-footer` to its host', () => {
    expect(fixture.nativeElement.classList.contains('full-footer')).toBeTruthy();
  });

  describe('on <daff-container>', () => {
    it('should set size="md"', () => {
      const container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('md');
    });
  });

  describe('on <daff-logo>', () => {
    it('should set type="icon"', () => {
      const logo = fixture.debugElement.query(By.css('daff-logo'));

      expect(logo.componentInstance.type).toEqual('icon');
    });
  });

  it('renders a <daff-list-item> for each leaf in the tree of links', () => {
    const listItems = fixture.debugElement.queryAll(By.css('daff-list-item'));
    const numberOfLinks = component.links.reduce((acc,linkset)=>acc+linkset.links.length,0);

    expect(listItems.length).toEqual(numberOfLinks);
  });
});
