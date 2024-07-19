import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffContainerModule } from '@daffodil/design/container';
import { DaffListModule } from '@daffodil/design/list';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
      ],
      imports: [
        RouterTestingModule,
        DaffContainerModule,
        DaffListModule,
        FontAwesomeModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a <daff-list-item> for each leaf in the tree of links', () => {
    const listItems = fixture.debugElement.queryAll(By.css('daff-list-item'));
    const numberOfLinks = component.links.reduce((acc,linkset)=>acc+linkset.links.length,0);

    expect(listItems.length).toEqual(numberOfLinks);
  });
});
