import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaffNewsletterComponent } from './newsletter.component';
import { DaffContainerModule } from '../design/atoms/container/container.module';
import { By } from '@angular/platform-browser';

describe('DaffNewsletterComponent', () => {
  let component: DaffNewsletterComponent;
  let fixture: ComponentFixture<DaffNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffNewsletterComponent
      ],
      imports: [
        DaffContainerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffNewsletterComponent);
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
});
