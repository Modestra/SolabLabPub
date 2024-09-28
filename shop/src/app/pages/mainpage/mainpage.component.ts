import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardProduct } from '../../entities/card';
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

  public name: string = "";
  public sell: number = 0;
  public router = this._router;

  private advert = inject(AdvertService)

  public example: CardProduct[] = []

  constructor(private _router: Router) {

  }
  ngOnInit(): void {
    this.advert.getAllAdvert().subscribe((resp) => {
      console.log(resp)
    })
  }
}
