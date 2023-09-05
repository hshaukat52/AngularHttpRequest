import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './posts.service';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponentComponent } from './Components/api-component/api-component.component';
import { FilterSearchComponent } from './Components/filter-search/filter-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponentComponent,
    FilterSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ],
  providers: [ApiComponentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
