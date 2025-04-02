import {
  Pipe,
  PipeTransform,
} from '@angular/core';
import {
  DomSanitizer,
  SafeUrl,
} from '@angular/platform-browser';

@Pipe({
  name: 'daffYoutubeSafe',
})
export class DaffYoutubeSafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
