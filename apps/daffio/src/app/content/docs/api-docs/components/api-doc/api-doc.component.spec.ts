import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffioApiDocComponent } from './api-doc.component';
import { DaffioApiDocModule } from './api-doc.module';
import { DaffioApiDoc } from '../../models/api-doc';

@Component({template: '<daffio-api-doc [doc]="docValue"></daffio-api-doc>'})
class WrapperComponent {
  docValue: DaffioApiDoc = {
    id: 'id',
    title: 'title',
    contents: 'content'
  };
}

describe('DaffioApiDocComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffioApiDocComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffioApiDocModule
      ],
      declarations: [
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('daffio-api-doc')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take doc as input', () => {
    expect(component.doc).toEqual(wrapper.docValue);
  });
});
