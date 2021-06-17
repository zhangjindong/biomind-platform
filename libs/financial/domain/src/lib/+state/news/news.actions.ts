import { createAction, props } from '@ngrx/store';
import { News } from '../../entities/news';

export const loadNews = createAction(
  '[News] Load News'
);

export const loadNewsSuccess = createAction(
  '[News] Load News Success',
  props<{ news: News[] }>()
);

export const loadNewsFailure = createAction(
  '[News] Load News Failure',
  props<{ error: any }>()
);
