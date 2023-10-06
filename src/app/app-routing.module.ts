import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectMeComponent } from './Content/connect-me.component';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "projects",
    component : MyProjectsComponent
  },
  {
    path : 'services',
    component : OurServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
