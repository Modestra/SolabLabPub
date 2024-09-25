import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NewcardComponent } from "../../components/newcard/newcard.component";

@Component({
  selector: 'app-my-advert',
  standalone: true,
  imports: [HeaderComponent, NewcardComponent],
  templateUrl: './my-advert.component.html',
  styleUrl: './my-advert.component.scss'
})
export class MyAdvertComponent {

}
