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

  constructor(private _router: Router) {

  }
  public form: FormGroup = new FormGroup({
    phone: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  })
  onSubmit(form: any) {
    inject(UserService).registerUser(form).subscribe((resp) => {

    })
  }
}
