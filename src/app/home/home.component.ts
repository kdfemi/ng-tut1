import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
 customObsSubscription: Observer<string>
  ngOnDestroy(): void {

  }

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
    const myObservable = Observable.create(
      (observer: Observer<String>)=>{
        setTimeout(() => {
          observer.next('first call back')
        }, 2000);

        setTimeout(() => {
          observer.next('Second call back')
        }, 4000);

        setTimeout(() => {
          observer.error ('this doesnt work')
        }, 5000);
      }
    );
    this.customObsSubscription = myObservable;

    myObservable.subscribe(
      (data:string)=> console.log(data),
      (error:string)=> console.log(error),
      ()=> console.log('completed')
    )
  }
  onServerLoad(id:number){
    //Do Something
    this.router.navigate(['/servers', id, 'edit'],{queryParams:{allowEdit: '1'}, fragment:'loading'});
  }
  onLoging(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }
}
