export interface DaffNewsletterTransformerInterface<T, REQ, RES, V>{
	transformOut(newsletter: T): REQ;
	transformIn(newsletter: RES): V;
}
