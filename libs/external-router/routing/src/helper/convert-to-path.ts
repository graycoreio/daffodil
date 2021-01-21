import {
	UrlSegment,
} from '@angular/router';

export const daffConvertToPath = (segments: UrlSegment[]) => {
	return segments.map(seg => seg.path).join('/');
};
