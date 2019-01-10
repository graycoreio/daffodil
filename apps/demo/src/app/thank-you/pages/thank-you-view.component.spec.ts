import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouViewComponent } from './thank-you-view.component';
import { Component } from '@angular/core';
import { DaffContainerModule, DaffContainerComponent } from '@daffodil/design';
import { By } from '@angular/platform-browser';

@Component({selector: 'demo-thank-you', template: ''})
class MockThankYouComponent {}

describe('ThankYouViewComponent', () => {
  let component: ThankYouViewComponent;
  let fixture: ComponentFixture<ThankYouViewComponent>;
  let daffContainer: DaffContainerComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffContainerModule
      ],
      declarations: [ 
        ThankYouViewComponent,
        MockThankYouComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    daffContainer = fixture.debugElement.query(By.css('daff-container')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <daff-container>', () => {
    
    it('should set size', () => {
      expect(daffContainer.size).toEqual('md');
    });
  });
});
