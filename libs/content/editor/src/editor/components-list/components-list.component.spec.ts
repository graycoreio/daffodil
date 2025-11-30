import { Component } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { provideDynamicComponent } from '@daffodil/content';

import { ComponentsListComponent } from './components-list.component';

@Component({
  selector: 'test-component-a',
  template: '',
  standalone: true,
})
class TestComponentA {}

@Component({
  selector: 'test-component-b',
  template: '',
  standalone: true,
})
class TestComponentB {}

describe('@daffodil/content/editor | ComponentsListComponent', () => {
  let component: ComponentsListComponent;
  let fixture: ComponentFixture<ComponentsListComponent>;

  describe('with no registered components', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ComponentsListComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(ComponentsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have an empty components array', () => {
      expect(component.components).toEqual([]);
    });

    it('should display the empty message', () => {
      const emptyMessage = fixture.nativeElement.querySelector('.empty-components');
      expect(emptyMessage).toBeTruthy();
      expect(emptyMessage.textContent).toContain('No components available');
    });

    it('should not display the components grid', () => {
      const grid = fixture.nativeElement.querySelector('.components-grid');
      expect(grid).toBeFalsy();
    });
  });

  describe('with registered components', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ComponentsListComponent],
        providers: [
          provideDynamicComponent([
            {
              componentType: TestComponentA,
              name: 'TestComponentA',
              description: 'A test component for testing',
            },
            {
              componentType: TestComponentB,
              name: 'TestComponentB',
              description: 'Another test component',
            },
          ]),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(ComponentsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have the registered components', () => {
      expect(component.components.length).toBe(2);
      expect(component.components[0].name).toBe('TestComponentA');
      expect(component.components[1].name).toBe('TestComponentB');
    });

    it('should not display the empty message', () => {
      const emptyMessage = fixture.nativeElement.querySelector('.empty-components');
      expect(emptyMessage).toBeFalsy();
    });

    it('should display the components grid', () => {
      const grid = fixture.nativeElement.querySelector('.components-grid');
      expect(grid).toBeTruthy();
    });

    it('should display a card for each component', () => {
      const cards = fixture.nativeElement.querySelectorAll('.component-card');
      expect(cards.length).toBe(2);
    });

    it('should display component names', () => {
      const names = fixture.nativeElement.querySelectorAll('.component-name');
      expect(names[0].textContent).toContain('TestComponentA');
      expect(names[1].textContent).toContain('TestComponentB');
    });

    it('should display component descriptions', () => {
      const descriptions = fixture.nativeElement.querySelectorAll('.component-description');
      expect(descriptions[0].textContent).toContain('A test component for testing');
      expect(descriptions[1].textContent).toContain('Another test component');
    });
  });

  describe('with components without descriptions', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [ComponentsListComponent],
        providers: [
          provideDynamicComponent({
            componentType: TestComponentA,
            name: 'TestComponentA',
          }),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(ComponentsListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should display the component without a description', () => {
      const card = fixture.nativeElement.querySelector('.component-card');
      expect(card).toBeTruthy();

      const name = card.querySelector('.component-name');
      expect(name.textContent).toContain('TestComponentA');

      const description = card.querySelector('.component-description');
      expect(description.textContent.trim()).toBe('');
    });
  });
});
