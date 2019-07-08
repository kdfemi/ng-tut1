import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ServersService } from '../servers.service';

@Injectable({
  providedIn: 'root'
})
export class ServerResolverServiceService implements Resolve<{id:number, name:string, status:string}> {
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): { id: number; name: string; status: string; } | import("rxjs").Observable<{ id: number; name: string; status: string; }> | Promise<{ id: number; name: string; status: string; }> {
    return this.serversService.getServer(+route.params['id'])
  }

  constructor(private serversService: ServersService) { }
}
