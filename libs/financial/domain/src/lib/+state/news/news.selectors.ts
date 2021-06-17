import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NEWS_FEATURE_KEY, State, NewsPartialState, newsAdapter } from './news.reducer';

// Lookup the 'News' feature state managed by NgRx
export const getNewsState = createFeatureSelector<NewsPartialState, State>(NEWS_FEATURE_KEY);

const { selectAll, selectEntities } = newsAdapter.getSelectors();

export const getNewsLoaded = createSelector(
  getNewsState,
  (state: State) => state.loaded
);

export const getNewsError = createSelector(
  getNewsState,
  (state: State) => state.error
);

export const getAllNews = createSelector(
  getNewsState,
  (state: State) => selectAll(state)
);

export const getNewsEntities = createSelector(
  getNewsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getNewsState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getNewsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
