import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ==> Pages Components
import { LoginComponent } from './public/login/login.component';
import { EmpleadoComponent } from './admin/empleado/empleado.component';

// ==> Guard
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'empleados',
    component: EmpleadoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
