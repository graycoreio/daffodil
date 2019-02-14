import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { DaffioFooterComponent } from './footer.component';
import { DaffioLogoModule } from '../logo/logo.module';
import { DaffioNewsletterModule } from '../../newsletter/newsletter.module';

import {
  DaffContainerModule,
  DaffListModule
} from '@daffodil/design';

describe('DaffioFooterComponent', () => {
  let component: DaffioFooterComponent;
  let fixture: ComponentFixture<DaffioFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffioFooterComponent
      ],
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffioLogoModule,
        DaffListModule,
        DaffioNewsletterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffioFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-container>', () => {
    it('should set size="md"', () => {
      const container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('md');
    });
  });

  describe('on <daffio-logo>', () => {
    it('should set type="icon"', () => {
      const logo = fixture.debugElement.query(By.css('daffio-logo'));

      expect(logo.componentInstance.type).toEqual('icon');
    });
  });

  it('renders a <daff-list-item> for each leaf in the tree of links', () => {
    const listItems = fixture.debugElement.queryAll(By.css('daff-list-item'));
    const numberOfLinks = component.links.reduce((acc,linkset)=>acc+linkset.links.length,0);

    expect(listItems.length).toEqual(numberOfLinks);
  });
});
