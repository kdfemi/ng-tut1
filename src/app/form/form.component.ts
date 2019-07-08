import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('f') myForm:NgForm;
  defaultQuestion = "teacher";
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  }
  submitted = false;
  constructor() { }

  ngOnInit() {
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.myForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.myForm.form.patchValue({
      userData:{
        username: suggestedName,
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secretQuestion = this.myForm.value.secret;
    this.user.answer = this.myForm.value.questionAnswer
    this.user.gender = this.myForm.value.gender;
    this.myForm.reset()
  }
}
