import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffContainerComponent } from './container.component';
import { DaffSizeAllType } from '../../core/sizeable/sizeable';

@Component({
  template: `<daff-container [size]="size"></daff-container>`
})
class WrapperComponent {
  size: DaffSizeAllType;
}

describe('DaffContainerComponent', () => {
  let wrapper: WrapperComponent;
  let component: DaffContainerComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WrapperComponent,
        DaffContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.debugElement.componentInstance;
    de = fixture.debugElement.query(By.css('daff-container'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  describe('<daff-container>', () => {
    it('should add a class of "daff-container" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-container': true,
      }));
    });
  });

  describe('setting the size', () => {
    it('should not set a default size', () => {
      de = fixture.debugElement.query(By.css('daff-container'));
      expect(de.nativeElement.classList.toString()).toEqual('daff-container');
    });

    it('should add the size class on the host element for the defined size', () => {
      wrapper.size = 'xs';
      fixture.detectChanges();
      
      expect(de.nativeElement.classList.contains('daff-xs')).toEqual(true);
    });
  });
});
