import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { daffSuffixableMixin } from './suffixable';
import { DaffPrefixSuffixModule } from '../prefix-suffix.module';
import { DaffSuffixDirective } from '../suffix.directive';

class SuffixableComponentBase {}

const _suffixableComponentBase = daffSuffixableMixin(SuffixableComponentBase);

@Component({
  selector: 'daff-suffixable',
  template: '<ng-content></ng-content>'
})
class SuffixableComponent extends _suffixableComponentBase {}

@Component({
  template: '<daff-suffixable><div daffSuffix></div></daff-suffixable>'
})
class WrapperComponent {}


describe('daffSuffixableMixin', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let suffixableComponent: SuffixableComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        DaffPrefixSuffixModule
      ],
      declarations: [
        WrapperComponent,
        SuffixableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    suffixableComponent = fixture.debugElement.query(By.css('daff-suffixable')).componentInstance;
  });

  it('should add a _suffix property to an existing class', () => {
    expect('_suffix' in suffixableComponent).toBeTruthy();
  });

  it('should make the _suffix property the daffPrefix directive instance', () => {
    expect(suffixableComponent._suffix).toEqual(jasmine.any(DaffSuffixDirective));
  });
});
