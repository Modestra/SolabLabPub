import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from "../../ui/input/input.component";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private _router : Router) {
    
  }

}
