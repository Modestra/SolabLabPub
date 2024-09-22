import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public isCorrent : Boolean = false;
  constructor(private _router: Router, private _userservice: UserService) {

  }
  public form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  OnSubmit(){
    this._userservice.loginUser(this.form.value).subscribe((resp)=>{
      localStorage.setItem('token', JSON.stringify(resp))
      this._router.navigate(['/'])
    })
  }

}
