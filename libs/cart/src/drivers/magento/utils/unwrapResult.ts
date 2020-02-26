import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

export const unwrapResult = pipe(
  map(({data}) => data)
)
