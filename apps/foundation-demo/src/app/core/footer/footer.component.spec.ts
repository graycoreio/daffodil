import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { By } from '@angular/platform-browser';

import {
  DaffContainerModule,
  DaffListModule
} from '@daffodil/design';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FooterComponent
      ],
      imports: [
        DaffContainerModule,
        DaffListModule
      ]
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

  describe('on <daff-container>', () => {
    it('should set size="medium"', () => {
      let container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('medium');
    });
  });

  describe('the list of navigational links', () => {
    it('should render three daff-lists with type="link"', () => {
      let lists = fixture.debugElement.queryAll(By.css('daff-list'));

      expect(lists.length).toEqual(3);
      
      lists.forEach(list => {
        expect(list.componentInstance.type).toEqual('link');
      });
    });
  });
});
