import { Observable } from 'rxjs';
import { CanDeactivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

export interface CanComponentDeactivate{
    canDeactivate: () =>Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): 
        boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
       return component.canDeactivate();
    }

}