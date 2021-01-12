export * from './actions/newsletter.actions';
export {
  DaffNewsletterState,
  reducer
} from './reducers/newsletter.reducer';
export {
  DaffNewsletterFeatureState,
  selectDaffNewsletterError,
  selectDaffNewsletterLoading,
  selectDaffNewsletterSuccess
} from './selectors/newsletter.selector';

export { DaffNewsletterFacade } from './facades/newsletter.facade';
export { DaffNewsletterFacadeInterface } from './facades/newsletter-facade.interface';

export { DaffNewsletterStateModule } from './newsletter-state.module'
