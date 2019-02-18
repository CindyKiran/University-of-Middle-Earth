import {Component, Input, OnInit} from '@angular/core';
import { StudentService} from '../student.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Student} from '../Student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:  [StudentService]
})
export class Login implements OnInit {
  constructor(public fb: FormBuilder, private studentService: StudentService, private router: Router) {
  }

  public dataForm = this.fb.group({
    firstName:  ['', Validators.required],
    lastName:  ['', Validators.required],
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
    place:  ['', Validators.required],
    creature: ['', Validators.required]
  });

  ngOnInit() {
  }

  redError: boolean = false;

  public loginData(event) {

    const firstName = this.dataForm.controls['firstName'].value;
    const lastName = this.dataForm.controls['lastName'].value;
    const userName = this.dataForm.controls['userName'].value;
    const passWord = this.dataForm.controls['passWord'].value;
    const place = this.dataForm.controls['place'].value;
    const creature = this.dataForm.controls['creature'].value;

    this.studentService.authenticate(new Student(0, firstName, lastName, userName, passWord, place, creature)).subscribe(result => {
        console.log(result)
        if (result == true) {
          this.router.navigate(['blackboard'])
        } else if (result == false) {
          this.router.navigate([''])
          this.redError = true;
        }
      }
    );
  }
}
