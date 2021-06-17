import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromDept from '../+state/dept/dept.reducer';
import * as DeptSelectors from '../+state/dept/dept.selectors';

@Injectable({ providedIn: 'root' })
export class HomeListFacade {
  loaded$ = this.store.pipe(select(DeptSelectors.getDeptLoaded));
  deptList$ = this.store.pipe(select(DeptSelectors.getAllDept));
  selectedDept$ = this.store.pipe(select(DeptSelectors.getSelected));

  constructor(private store: Store<fromDept.DeptPartialState>) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
