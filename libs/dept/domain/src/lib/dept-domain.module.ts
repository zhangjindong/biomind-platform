import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptEffects } from './+state/dept/dept.effects';
import * as fromDept from './+state/dept/dept.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDept.DEPT_FEATURE_KEY, fromDept.reducer),
    EffectsModule.forFeature([DeptEffects]),
  ],
})
export class DeptDomainModule {}
