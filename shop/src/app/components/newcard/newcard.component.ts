import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcard',
  standalone: true,
  imports: [],
  templateUrl: './newcard.component.html',
  styleUrl: './newcard.component.scss'
})
export class NewcardComponent {

  public router = inject(Router)

  constructor() {

  }

  CreateAdvert() {
    this.router.navigate(['/advert/create'])
  }

}
