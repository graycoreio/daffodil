import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffOpenableDirective } from '../openable.directive';

@Component({
  template: `
		<p>Hello stateful!</p>
		`,
  selector: 'daff-stateful',
  standalone: true,
  hostDirectives: [
    {
      directive: DaffOpenableDirective,
      outputs: ['toggled'],
    },
  ],
})

class StatefulComponent {
  constructor(public openDirective: DaffOpenableDirective) {
    this.openDirective.stateless = false;
  }

  reveal() {
    this.openDirective.reveal();
  }
}

@Component({
  template: `
		<p>Hello stateless!</p>
		`,
  selector: 'daff-stateless',
  standalone: true,
  hostDirectives: [
    {
      directive: DaffOpenableDirective,
      inputs: ['open'],
      outputs: ['toggled'],
    },
  ],
})

class StatelessComponent {
  constructor(public openDirective: DaffOpenableDirective) {}

  reveal() {
    this.openDirective.reveal();
  }
}

@Component({
  template: `
		<daff-stateful (toggled)="toggledFunction()"></daff-stateful>
		<daff-stateless [open]="statelessOpen" (toggled)="toggledFunction()"></daff-stateless>
	`,
  imports: [
    StatefulComponent,
    StatelessComponent,
  ],
})

class WrapperComponent {
  toggledFunction = (val: boolean) => {};
  statelessOpen = false;
}

describe('@daffodil/design | DaffOpenableDirective | States', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should not add the class `daff-open` to either component', () => {
    expect(fixture.debugElement.queryAll(By.css('.daff-open')).length).toEqual(0);
  });

  it('should add the class `daff-open` to both components when they are open', () => {
    fixture.debugElement.query(By.directive(StatefulComponent)).componentInstance.reveal();
    wrapper.statelessOpen = true;

    fixture.detectChanges();

    expect(fixture.debugElement.queryAll(By.css('.daff-open')).length).toEqual(2);
  });

  it('should not desynchronize internal or external state when stateless', () => {
    wrapper.statelessOpen = false;
    const statelessComponent = fixture.debugElement.query(By.directive(StatelessComponent)).componentInstance;
    statelessComponent.reveal();

    fixture.detectChanges();

    expect(statelessComponent.openDirective.open).toEqual(false);
    expect(statelessComponent.openDirective.open).toEqual(wrapper.statelessOpen);
  });
});
