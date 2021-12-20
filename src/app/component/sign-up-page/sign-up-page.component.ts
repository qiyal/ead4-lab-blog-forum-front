import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Role} from '../../object/role';
import {UserService} from '../../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registaration-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  userForm = this.fb.group({
    username: ['', [Validators.required]],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    password: ['', Validators.required],
    roles: [[new Role(2, 'USER')]],
    // gender: [''],
    // imgUrl: ['']
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  get username(): FormControl {
    return this.userForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.userForm.get('password') as FormControl;
  }

  get name(): FormControl {
    return this.userForm.get('name') as FormControl;
  }

  get surname(): FormControl {
    return this.userForm.get('surname') as FormControl;
  }

  // get gender(): FormControl {
  //   return this.userForm.get('gender') as FormControl;
  // }

  onClick(): void {
    // if (this.gender.value === 'Male') {
    //   this.userForm.controls.imgUrl.setValue('/assets/img/users/user-logo-default-male.png');
    // } else {
    //   this.userForm.controls.imgUrl.setValue('/assets/img/users/user-logo-default-female.png');
    // }

    this.userService.createUser(this.userForm.getRawValue()).subscribe(res => {
      if (res !== null) {
        this.router.navigate(['/signIn']);
      }
    });
  }
}
