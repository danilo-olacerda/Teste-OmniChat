import { MovieDetailsComponent } from '../components/movieDetails/components/movieDetails.components';
import { QueryFormComponent } from '../components/queryForm/components/queryForm.component';
import { SpinnerComponent } from '../components/spinner/components/spinner.component';
import { HeaderComponent } from '../components/header/components/header.component';
import { HomeComponent } from '../components/home/components/home.component';
import { WebService } from '../services/webService.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movie/:id', component: MovieDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    QueryFormComponent,
    HeaderComponent,
    SpinnerComponent,
    HomeComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    NgSelectModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})

export class AppModule {
    constructor() { }
}