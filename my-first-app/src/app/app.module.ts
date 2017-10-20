import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { LightBlueDirective } from './light-blue.directive';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { LoginComponent } from './login/login.component';
import { PriceService } from './price.service';

const appRoutes:Routes=[
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'contactpage',
    component:ContactpageComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    LightBlueDirective,
    HomepageComponent,
    ContactpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
