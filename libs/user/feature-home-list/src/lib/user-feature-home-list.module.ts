import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDomainModule } from '@biomind-platform/user/domain';
import { HomeListComponent } from './home-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UserDomainModule,
    RouterModule.forChild([{ path: '', component: HomeListComponent }]),
  ],
  declarations: [HomeListComponent],
  exports: [HomeListComponent],
})
export class UserFeatureHomeListModule {}
