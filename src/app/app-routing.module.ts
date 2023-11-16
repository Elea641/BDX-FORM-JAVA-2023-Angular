import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredComponent } from './secured/secured.component';
import { AuthGuard } from './core/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { isConnectGuard } from './core/is-connect.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { isAdminGuard } from './core/is-admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [isConnectGuard] },
  { path: 'secured', component: SecuredComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [isConnectGuard],
  },
  { path: 'admin', component: AdminComponent, canActivate: [isAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
