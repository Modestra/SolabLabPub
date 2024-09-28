import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { InputComponent } from "../../ui/input/input.component";
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserForm } from '../../../entities/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private _router: Router, private _userservice: UserService) {

  }
  public form: FormGroup = new FormGroup({
    name: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl('')
  })
  onSubmit(form: any) {
    console.log(form.value)
    this._userservice.registerUser(form.value).subscribe((resp) => {
      localStorage.setItem('user_id', resp as string)
      this._router.navigate(['/'])
      //"090f4353-9852-4ddd-a81d-e717ed2dd73c"
    })
  }
}
