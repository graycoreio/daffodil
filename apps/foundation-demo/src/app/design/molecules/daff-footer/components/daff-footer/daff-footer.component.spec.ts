import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffFooterComponent } from './daff-footer.component';

@Component({template: '<div class="host-element" daff-footer></div>'})
class TestDaffFooterComponentWrapper {}

describe('DaffFooterComponent', () => {
  let component: TestDaffFooterComponentWrapper;
  let fixture: ComponentFixture<TestDaffFooterComponentWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DaffFooterComponent,
        TestDaffFooterComponentWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDaffFooterComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add daff-footer class to host element', () => {
    let hostElement = fixture.debugElement.query(By.css('.host-element')).nativeElement;
    expect(hostElement.classList.contains('daff-footer')).toBeTruthy();
  });
});
