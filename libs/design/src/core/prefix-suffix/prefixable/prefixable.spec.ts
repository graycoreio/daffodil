import { Component } from '@angular/core';
import {
  ComponentFixture,
  waitForAsync,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { daffPrefixableMixin } from './prefixable';
import { DaffPrefixSuffixModule } from '../prefix-suffix.module';
import { DaffPrefixDirective } from '../prefix.directive';

class PrefixableComponentBase {}

const _prefixableComponentBase = daffPrefixableMixin(PrefixableComponentBase);

@Component({
  selector: 'daff-prefixable',
  template: '<ng-content></ng-content>',
  standalone: false,
})
class PrefixableComponent extends _prefixableComponentBase {
  constructor() {
    super();
  }
}

@Component({
  template: '<daff-prefixable><div daffPrefix></div></daff-prefixable>',
  standalone: false,
})
class WrapperComponent {}


describe('@daffodil/design | daffPrefixableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let prefixableComponent: PrefixableComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffPrefixSuffixModule,
      ],
      declarations: [
        WrapperComponent,
        PrefixableComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    prefixableComponent = fixture.debugElement.query(By.css('daff-prefixable')).componentInstance;
  });

  it('should add a _prefix property to an existing class', () => {
    expect('_prefix' in prefixableComponent).toBeTruthy();
  });

  it('should make the _prefix property the daffPrefix directive instance', () => {
    expect(prefixableComponent._prefix).toEqual(jasmine.any(DaffPrefixDirective));
  });
});
