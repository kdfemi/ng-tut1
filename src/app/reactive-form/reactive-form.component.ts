import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female']
  forbiddenNames = ['chris']
  signupForm: FormGroup
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData':new FormGroup({
        'username': new FormControl(null, [Validators.required,this.forbiddenName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      
      }),
      'gender': new FormControl(null),
      'hobbies': new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signupForm)
  }

  addHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenName(control: FormControl): {[s:string]: boolean} {
  
    if(this.forbiddenNames.indexOf(control.value))
          return {'nameIsForbidden':true};
    return null;
  }

  forbiddenEmails(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        }else resolve(null)
      }, 1500);
    })
    return promise;
  }
}
