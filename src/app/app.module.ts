import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ConnectMeComponent } from './Content/connect-me.component';
import { LocationComponent } from './location/location.component';
import { OurServicesComponent } from './our-services/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    MyProjectsComponent,
    ConnectMeComponent,
    LocationComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
