import { ApplicationBuilderOptions } from '@angular/build';
import {
  Builder,
  BuilderContext,
  BuilderOutput,
  createBuilder,
} from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import {
  from,
  Observable,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { DaffVersioningProject } from './project.type';
import {
  daffVersioningApplyConditions,
  daffVersioningResolveConditions,
} from './resolve-conditions';

interface Options extends DaffVersioningProject, ApplicationBuilderOptions {}

/**
 * A builder which wraps `@angular/build:application` and enables the automatic managing of the
 * build conditions needed to support the driver auto versioning feature.
 *
 * See {@link DaffVersioningProject} for configuration options.
 */
const builder: Builder<any> = createBuilder((options: Options, context: BuilderContext): Observable<BuilderOutput> => {
  const b = daffVersioningResolveConditions(options, context).then((conditions) => {
    context.logger.info(`Running application builder with the following conditions: ${conditions}`);
    return context.scheduleBuilder('@angular/build:application', <json.JsonObject><unknown>daffVersioningApplyConditions(options, conditions), {
      target: context.target,
    });
  });

  return from(b).pipe(
    switchMap((run) => run.output),
  );
});

export default builder;
