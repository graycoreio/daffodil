import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({selector: 'homepage', template: ''})
class HomepageContainerMock {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomepageContainerMock
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
