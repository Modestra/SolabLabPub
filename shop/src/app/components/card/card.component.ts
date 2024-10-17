import { Component, inject, Input, OnInit } from '@angular/core';
import { CardProduct } from '../../entities/card';
import { AdvertService } from '../../services/advert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  public imageUrl: string | ArrayBuffer | null = null;

  public advert = inject(AdvertService)
  public router = inject(Router)
  @Input() cardinfo: CardProduct = {} as CardProduct;

  public date = new Date(this.cardinfo.createdAt)

  ngOnInit(): void {
    this.advert.getImagesById(this.cardinfo.imagesIds[0]).then((resp) => {
      console.log(resp)
    }).catch((error) => {
      console.error(error)
    })
  }

  LoadAdvert() {
    this.router.navigate(['/advert/info'], {
      queryParams: {
        "id": this.cardinfo.id
      }
    })
  }

}
