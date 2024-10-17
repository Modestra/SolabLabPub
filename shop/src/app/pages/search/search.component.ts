import { Component, inject, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from '../../services/advert.service';
import { CategoryService } from '../../services/category.service';
import { Category, Search } from '../../entities/card';
import { FormsModule } from '@angular/forms';
import { Advert, CardProduct } from '../../entities/card';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, DropdownModule, FormsModule, CardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  public advert = inject(AdvertService)
  public category = inject(CategoryService)

  public sortSelect: string = '';

  public search: Search = {
    "search": "string",
    "showNonActive": true,
    "category": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }

  public CategoryList: Category[] = []
  public advertList: any[] = [];
  public sortList: any[] = [
    {
      "name": "Новые"
    },
    {
      "name": "Старые"
    }
  ]

  constructor(private route: ActivatedRoute) {

  }

  SetSortedList(event: Event) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.search.search = params["search"]
      this.search.category = params["categoryId"]
    })
    this.category.getHeadCategories().subscribe({
      next: (responce) => {
        this.CategoryList = responce.filter(category => category.parentId === "00000000-0000-0000-0000-000000000000")
      }
    })
    this.advert.getAdverts(this.search).then((resp) => {
      this.advertList = resp as CardProduct[]
    })
  }
}
