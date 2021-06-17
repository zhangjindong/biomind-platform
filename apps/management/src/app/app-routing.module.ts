import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('@biomind-platform/user/feature-home-list').then(
        (m) => m.UserFeatureHomeListModule
      ),
  },
  {
    path: 'dept',
    loadChildren: () =>
      import('@biomind-platform/dept/feature-home-list').then(
        (m) => m.DeptFeatureHomeListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
