import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffTabComponent } from './tab.component';

@Component({
  template: `
		<daff-tab [disabled]="disabled"></daff-tab>
	`,
  standalone: true,
  imports: [
    DaffTabComponent,
  ],
})
class WrapperComponent {
  disabled: boolean;
}

describe('@daffodil/design/tabs | DaffTabComponent | Defaults', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DaffTabComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('daff-tab'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should take disabled as an input', () => {
    expect(component.disabled).toEqual(wrapper.disabled);
  });

  it('should have a generated id', () => {
    expect(component.id).toMatch('daff-tab-[0-9]*');
  });
});

@Component({
  template: `
		<daff-tab [id]="id"></daff-tab>
	`,
  standalone: true,
  imports: [
    DaffTabComponent,
  ],
})
class IdWrapperComponent {
  id: string;
}

describe('@daffodil/design/tabs | DaffTabComponent | Custom Id', () => {
  let wrapper: IdWrapperComponent;
  let fixture: ComponentFixture<IdWrapperComponent>;
  let component: DaffTabComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        IdWrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdWrapperComponent);
    wrapper = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('daff-tab'));
    component = de.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should take id as an input', () => {
    expect(component.id).toEqual(wrapper.id);
  });

  it('should allow a custom id to be set', () => {
    expect(component.id).toEqual(wrapper.id);
  });
});
