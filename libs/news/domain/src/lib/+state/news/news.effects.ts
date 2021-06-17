import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as NewsActions from './news.actions';
import { NewsDataService } from '../../infrastructure/news.data.service';

@Injectable()
export class NewsEffects {
  loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewsActions.loadNews),
      switchMap((action) =>
        this.newsDataService.load().pipe(
          map((news) =>
            NewsActions.loadNewsSuccess({ news })
          ),
          catchError((error) =>
            of(NewsActions.loadNewsFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private newsDataService: NewsDataService
  ) { }
}
