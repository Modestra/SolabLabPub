import { Component, inject, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from '../../services/advert.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../entities/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent, DropdownModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  public result: string | null = this.route.snapshot.paramMap.get('result');
  public categoryId: string | null = this.route.snapshot.paramMap.get('categoryId')

  public advert = inject(AdvertService)
  public category = inject(CategoryService)

  public sortSelect: string = '';

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
      this.result = params["search"]
      this.categoryId = params["categoryId"]
    })
    this.category.getHeadCategories().subscribe({
      next: (responce) => {
        this.CategoryList = responce.filter(category => category.parentId === "00000000-0000-0000-0000-000000000000")
      }
    })
    console.log({ "categoryId": this.categoryId, "search": this.result })
  }
}
