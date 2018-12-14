import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterComponent } from './newsletter.component';
import { DaffContainerModule } from '@daffodil/design';

import { By } from '@angular/platform-browser';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NewsletterComponent
      ],
      imports: [
        DaffContainerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-container>', () => {
    it('should set size="md"', () => {
      let container = fixture.debugElement.query(By.css('daff-container'));

      expect(container.componentInstance.size).toEqual('md');
    });
  });
});
