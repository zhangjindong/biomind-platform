import { createAction, props } from '@ngrx/store';
import { Dept } from '../../entities/dept';

export const loadDept = createAction(
  '[Dept] Load Dept'
);

export const loadDeptSuccess = createAction(
  '[Dept] Load Dept Success',
  props<{ dept: Dept[] }>()
);

export const loadDeptFailure = createAction(
  '[Dept] Load Dept Failure',
  props<{ error: any }>()
);
