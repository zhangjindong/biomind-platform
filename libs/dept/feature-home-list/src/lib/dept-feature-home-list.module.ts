import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptDomainModule } from '@biomind-platform/dept/domain';
import { HomeListComponent } from './home-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DeptDomainModule,
    RouterModule.forChild([{ path: '', component: HomeListComponent }]),
  ],
  declarations: [HomeListComponent],
  exports: [HomeListComponent],
})
export class DeptFeatureHomeListModule {}
