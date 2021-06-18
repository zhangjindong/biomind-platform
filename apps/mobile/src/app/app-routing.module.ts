import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'management',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './UserFeatureHomeListModule',
      })
        // import('@biomind-platform/user/feature-home-list')
        .then((m) => m.UserFeatureHomeListModule),
  },
  {
    path: 'dept',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'management',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './DeptFeatureHomeListModule',
      })
        // import('@biomind-platform/dept/feature-home-list').
        .then((m) => m.DeptFeatureHomeListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
