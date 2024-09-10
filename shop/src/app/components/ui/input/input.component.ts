import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = "";
  @Output() placeholderChange = new EventEmitter();

  @Input() type = "";
  @Output() typeChange = new EventEmitter();

  constructor() {

  }
}
