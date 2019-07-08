import { NgModule } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverServiceService } from './servers/server/server-resolver-service.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe.component';
import { HttpRequestComponent } from './http-request/http-request.component';

const appRoutes:Routes =[
    {path:'', component: HomeComponent},
    {path:'users', component: UsersComponent, children:[
      {path:':id/:name', component: UserComponent},
    ]},
    {path:'servers', 
    // canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    component: ServersComponent, children:[
      {path:':id', component: ServerComponent, resolve:{server:ServerResolverServiceService}},
      {path:':id/edit', component: EditServerComponent, 
      canDeactivate:[CanDeactivateGuard]}
     ]},
     {path:'forms', component:FormComponent},
     {path:'pipe', component:PipeComponent},
     {path:'reactive', component:ReactiveFormComponent},
     {path:'http', component:HttpRequestComponent},
     
    //  {path:'not-found', component:PageNotFoundComponent},
     {path:'not-found', component:ErrorPageComponent, data:{message: 'Page not found!'}},
     {path:'**', /*component:PageNotFoundComponent*/redirectTo:'/not-found'}

   ];
   
@NgModule({

    imports: [
        // RouterModule.forRoot(appRoutes, {useHash:true})
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{

}