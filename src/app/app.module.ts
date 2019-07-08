import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { ShortenPipe } from './pipe/shorten.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { HttpRequestComponent } from './http-request/http-request.component';
import { HttpClientModule } from '@angular/common/http';

// const appRoutes:Routes =[
//   {path:'', component: HomeComponent},
//   {path:'users', component: UsersComponent, children:[
//     {path:':id/:name', component: UserComponent},
//   ]},
//   {path:'servers', component: ServersComponent, children:[
//     {path:':id', component: ServerComponent},
//     {path:':id/edit', component: EditServerComponent}
//    ]},
//    {path:'**', component:PageNotFoundComponent}
//  ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    FormComponent,
    ReactiveFormComponent,
    PipeComponent,
    ShortenPipe,
    FilterPipe,
    HttpRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
