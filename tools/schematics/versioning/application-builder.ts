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

import { DaffJsonProject } from './daff-json.type';
import { daffVersioningGetConditions } from './get-conditions';
import packagesJson from './packages.json';

interface Options extends DaffJsonProject, ApplicationBuilderOptions {}

const builder: Builder<any> = createBuilder((options: Options, context: BuilderContext): Observable<BuilderOutput> => {
  const conditions = daffVersioningGetConditions(options, <any>packagesJson);
  delete (<any>options).drivers;

  context.logger.info(`Running application builder with the following conditions: ${conditions}`);

  return from(context.scheduleBuilder('@angular/build:application', {
    ...options,
    conditions: conditions.concat(options.conditions ?? []),
  }, {
    target: context.target,
  })).pipe(
    switchMap((run) => run.output),
  );
});

export default builder;
