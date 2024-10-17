import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardProduct, Search } from '../../entities/card';
import { AuthModule } from "../../components/auth/auth.module";
import { Router } from '@angular/router';
import { AdvertService } from '../../services/advert.service';

@Component({
  selector: 'app-mainpage',
  imports: [HeaderComponent, CardComponent, CommonModule, AuthModule],
  standalone: true,
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent implements OnInit {

  public router = this._router;

  private advert = inject(AdvertService)

  public example: CardProduct[] = []

  public search: Search = {
    "search": "string",
    "showNonActive": true,
    "category": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }

  constructor(private _router: Router) {

  }
  ngOnInit(): void {
    this.advert.getAdverts(this.search).then((resp) => {
      this.example = resp as CardProduct[]
    }).catch((error) => {
      console.log("Не удалось загрузить изображения. Загружаем с локального сервера")
      console.log(error)
    })
  }
}
