import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

}
