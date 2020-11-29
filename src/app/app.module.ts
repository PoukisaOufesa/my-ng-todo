import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':status', component: TodoComponent }, //:status - parameter what can take any value
  { path: '**', redirectTo: '/all' } //** ** - is any other path */
];  

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
