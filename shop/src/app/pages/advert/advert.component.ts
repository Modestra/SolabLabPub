import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { AdvertService } from '../../services/advert.service';
import { Advert } from '../../entities/card';

@Component({
  selector: 'app-advert',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './advert.component.html',
  styleUrl: './advert.component.scss'
})
export class AdvertComponent implements OnInit {

  public id: string = '';
  public advert = inject(AdvertService);
  public advertInfo = {} as Advert;

  public imagesList = [];
  public imageMain: any;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params["id"]
    })

    this.advert.getAdvertById(this.id).subscribe({
      next: (resp) => {
        this.advertInfo = resp;
      },
      error: () => {

      }
    })
  }
}
