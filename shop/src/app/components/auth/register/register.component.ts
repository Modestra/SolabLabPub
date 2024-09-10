import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from "../../ui/input/input.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor() {

  }

}
