import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardProduct } from '../../entities/card';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [HeaderComponent, CardComponent, CommonModule,],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit {

  public name: string = "";
  public sell: number = 0;

  public example: CardProduct[] = [
    {
      name: "Гитара Fender",
      sell: 20000,
      address: "Москва, Ленинский проспект",
      time: "Сегодня 14:12"
    },
    {
      name: "Гитара Fender",
      sell: 20000,
      address: "Москва, Ленинский проспект",
      time: "Сегодня 14:12"
    },
    {
      name: "Гитара Fender",
      sell: 20000,
      address: "Москва, Ленинский проспект",
      time: "Сегодня 14:12"
    },
    {
      name: "Гитара Fender",
      sell: 20000,
      address: "Москва, Ленинский проспект",
      time: "Сегодня 14:12"
    },
    {
      name: "Гитара Fender",
      sell: 20000,
      address: "Москва, Ленинский проспект",
      time: "Сегодня 14:12"
    }
  ]

  ngOnInit(): void {

  }
}
