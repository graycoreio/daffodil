import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Observable, of } from 'rxjs';

import { SidebarComponent } from './sidebar.component';
import { DaffSidebarModule } from '../../../../design/molecules/sidebar/sidebar.module';
import { DaffSidebarComponent } from '../../../../design/molecules/sidebar/sidebar/sidebar.component';

let stubShowSidebar = true;

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let daffSidebar: DaffSidebarComponent;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffSidebarModule
      ],
      declarations: [ 
        SidebarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    daffSidebar = fixture.debugElement.query(By.css('daff-sidebar')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on `daff-sidebar`', () => {
    it('should set `opened`', () => {
      component.opened = true;
      fixture.detectChanges();
      expect(daffSidebar.opened).toEqual(true);

      component.opened = false;
      fixture.detectChanges();
      expect(daffSidebar.opened).toEqual(false);
    });
  });

  it('should emit `escapePressed` when the `daff-sidebar` emits `escapePressed`', () => {
    spyOn(component.escapePressed, 'emit');

    daffSidebar.escapePressed.emit();

    expect(component.escapePressed.emit).toHaveBeenCalledTimes(1);
  })

  it('should emit close when the `close` button is clicked', () => {
    spyOn(component.close, 'emit');

    fixture.debugElement.query(By.css('.sidebar__close')).nativeElement.click();

    expect(component.close.emit).toHaveBeenCalledTimes(1);
  })
});
