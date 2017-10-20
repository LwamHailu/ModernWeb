import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { ProductComponent } from './product/product.component';

const appRoutes:Routes=[
  
  
  {
    path:'product',
    component:ProductComponent
  },
   {
    path:'prod',
    component:ProductComponent
  }
  
  
]


@NgModule({
  declarations: [
    AppComponent,
   
    ProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
     FormsModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
