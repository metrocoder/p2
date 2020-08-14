import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { HomePageComponent } from './components/home-page/home-page.component'
import { PropertyCreateComponent } from './components/property-create/property-create.component';

const routes: Routes = [
  {path:"login", component :LoginComponent},
  {path:"home", component: HomePageComponent},
  {path:"createproperty", component: PropertyCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
