import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromNews from '../+state/news/news.reducer';
import * as NewsSelectors from '../+state/news/news.selectors';

@Injectable({ providedIn: 'root' })
export class ListFacade {
  loaded$ = this.store.pipe(select(NewsSelectors.getNewsLoaded));
  newsList$ = this.store.pipe(select(NewsSelectors.getAllNews));
  selectedNews$ = this.store.pipe(select(NewsSelectors.getSelected));

  constructor(private store: Store<fromNews.NewsPartialState>) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
