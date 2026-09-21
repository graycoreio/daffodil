import { ApplicationBuilderOptions } from '@angular/build';
import {
  Builder,
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import {
  from,
  Observable,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { collectPlatformVersions } from './collect-platform-versions';
import { daffVersioningGetConditions } from './get-conditions';
import { DaffVersioningProject } from './project.type';

interface Options extends DaffVersioningProject, ApplicationBuilderOptions {}

/**
 * A builder which wraps `@angular/build:application` and enables the automatic managing of the
 * build conditions needed to support the driver auto versioning feature.
 *
 * See {@link DaffVersioningProject} for configuration options.
 */
const builder: Builder<any> = createBuilder((options: Options, context: BuilderContext): Observable<BuilderOutput> => {
  const b = collectPlatformVersions([`${context.workspaceRoot}/node_modules/@daffodil/**`, ...options.packages.map((p) => `${context.workspaceRoot}/${p}`)]).then((packages) =>
    daffVersioningGetConditions(options, packages),
  ).then((conditions) => {
    context.logger.info(`Running application builder with the following conditions: ${conditions}`);
    delete (<any>options).drivers;
    delete (<any>options).packages;
    return context.scheduleBuilder('@angular/build:application', {
      ...options,
      conditions: conditions.concat(options.conditions ?? []),
    }, {
      target: context.target,
    });
  });

  return from(b).pipe(
    switchMap((run) => run.output),
  );
});

export default builder;
