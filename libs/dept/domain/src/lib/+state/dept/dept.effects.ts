import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as DeptActions from './dept.actions';
import { DeptDataService } from '../../infrastructure/dept.data.service';

@Injectable()
export class DeptEffects {
  loadDept$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeptActions.loadDept),
      switchMap((action) =>
        this.deptDataService.load().pipe(
          map((dept) =>
            DeptActions.loadDeptSuccess({ dept })
          ),
          catchError((error) =>
            of(DeptActions.loadDeptFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private deptDataService: DeptDataService
  ) { }
}
