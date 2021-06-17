import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DEPT_FEATURE_KEY, State, DeptPartialState, deptAdapter } from './dept.reducer';

// Lookup the 'Dept' feature state managed by NgRx
export const getDeptState = createFeatureSelector<DeptPartialState, State>(DEPT_FEATURE_KEY);

const { selectAll, selectEntities } = deptAdapter.getSelectors();

export const getDeptLoaded = createSelector(
  getDeptState,
  (state: State) => state.loaded
);

export const getDeptError = createSelector(
  getDeptState,
  (state: State) => state.error
);

export const getAllDept = createSelector(
  getDeptState,
  (state: State) => selectAll(state)
);

export const getDeptEntities = createSelector(
  getDeptState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDeptState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDeptEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
