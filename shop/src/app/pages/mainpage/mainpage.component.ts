import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardProduct } from '../../entities/card';
import { AuthModule } from "../../components/auth/auth.module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  imports: [HeaderComponent, CardComponent, CommonModule, AuthModule],
  standalone: true,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit {

  public name: string = "";
  public sell: number = 0;

  public router = this._router;

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

  constructor(private _router: Router) {

  }
  ngOnInit(): void {

  }
}
