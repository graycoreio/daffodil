import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';

import {
  _DYNAMIC_COMPONENT,
  ComponentRegistration,
} from '@daffodil/content';

/**
 * Displays a list of available components registered via {@link provideDynamicComponent}.
 *
 * This component is used within the AI editor to show users which components
 * are available for use in their content schemas. Each component is displayed
 * as a card showing its name and description.
 *
 * If no components are registered, a message indicating "No components available" is shown.
 */
@Component({
  selector: 'components-list',
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ComponentsListComponent {
  /**
   * The list of registered components injected from the DI system.
   * Defaults to an empty array if no components are registered.
   *
   * @docs-private
   */
  components = inject<ComponentRegistration[]>(_DYNAMIC_COMPONENT, { optional: true }) || [];
}
