import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as NewsActions from './news.actions';
import { News } from '../../entities/news';

export const NEWS_FEATURE_KEY = 'news';

export interface State extends EntityState<News> {
  selectedId ?: string | number;          // which News record has been selected
  loaded      : boolean;                  // has the News list been loaded
  error      ?: string | null;            // last known error (if any)
}

export interface NewsPartialState {
  readonly [NEWS_FEATURE_KEY]: State;
}

export const newsAdapter: EntityAdapter<News> = createEntityAdapter<News>();

export const initialState: State = newsAdapter.getInitialState({
  // set initial required properties
  loaded : false
});

const newsReducer = createReducer(
  initialState,
  on(NewsActions.loadNews,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(NewsActions.loadNewsSuccess,
    (state, { news }) => newsAdapter.upsertMany(news, { ...state, loaded: true })
  ),
  on(NewsActions.loadNewsFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return newsReducer(state, action);
}
