import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffTreeData } from '@daffodil/design/tree';

@Component({
  selector: 'design-land-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class DesignLandNavComponent implements OnInit {
  tree$: Observable<DaffTreeData<unknown>>;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.tree$ = this.http.get<DaffTreeData<unknown>>('/assets/nav.json');
  }
}
