import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ContactListComponent } from './contact-list/contact-list.component';


const routes: Routes = [
  { path: "contactList", component: ContactListComponent },
  { path: "**", redirectTo:"1"},
  { path: ":id", component: ApplicationComponent },
  
  
  
];
// const routes: Routes = [
//   { path: ":id", component: ApplicationComponent },
//   // { path: "**", redirectTo:"1"},
//   { path: "contactList", component: ContactListComponent }

// ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
