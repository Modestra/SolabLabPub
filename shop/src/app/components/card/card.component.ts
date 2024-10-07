import { Component, Input } from '@angular/core';
import { CardProduct } from '../../entities/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() cardinfo: CardProduct = { name: "", cost: 0, location: "", time: "Сегодня 14:12" };


}
