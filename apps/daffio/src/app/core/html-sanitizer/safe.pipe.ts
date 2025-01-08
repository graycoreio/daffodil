import {
  Pipe,
  PipeTransform,
} from '@angular/core';
import {
  DomSanitizer,
  SafeHtml,
} from '@angular/platform-browser';

@Pipe({
  name: 'safe',
  standalone: true,
})
export class DaffioSafeHtmlPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  transform(value: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
