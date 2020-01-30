export interface AuthReducerState {
  // TODO: investigate if nullable type is appropriate here
  token?: string,
  loading: boolean,
  errors: string[]
}
