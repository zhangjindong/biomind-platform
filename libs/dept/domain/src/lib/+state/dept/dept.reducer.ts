import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DeptActions from './dept.actions';
import { Dept } from '../../entities/dept';

export const DEPT_FEATURE_KEY = 'dept';

export interface State extends EntityState<Dept> {
  selectedId?: string | number; // which Dept record has been selected
  loaded: boolean; // has the Dept list been loaded
  error?: string | null; // last known error (if any)
}

export interface DeptPartialState {
  readonly [DEPT_FEATURE_KEY]: State;
}

export const deptAdapter: EntityAdapter<Dept> = createEntityAdapter<Dept>();

export const initialState: State = deptAdapter.getInitialState({
  // set initial required properties
  entities: [{ id: 0, name: 'PD', description: '产品研发' }],
  loaded: false,
});
const deptReducer = createReducer(
  initialState,
  on(DeptActions.loadDept, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DeptActions.loadDeptSuccess, (state, { dept }) =>
    deptAdapter.upsertMany(dept, { ...state, loaded: true })
  ),
  on(DeptActions.loadDeptFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return deptReducer(state, action);
}
