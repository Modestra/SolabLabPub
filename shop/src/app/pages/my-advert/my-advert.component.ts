import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { NewcardComponent } from "../../components/newcard/newcard.component";
import { AdvertService } from '../../services/advert.service';
import { Advert, CardProduct } from '../../entities/card';
import { CardComponent } from '../../components/card/card.component';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-my-advert',
  standalone: true,
  imports: [HeaderComponent, NewcardComponent, CardComponent],
  templateUrl: './my-advert.component.html',
  styleUrl: './my-advert.component.scss'
})
export class MyAdvertComponent implements OnInit {

  public advert = inject(AdvertService)
  public adverts: CardProduct[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.advert.getUserAdvert(localStorage.getItem('user_id')!).subscribe({
      next: (resp) => {
        this.adverts = resp as CardProduct[]
      },
      error: (error) => {
        console.error("Не удалось загрузить объекты", error)
      }
    })
  }
}
