import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Category } from '../../entities/card';
import { CategoryService } from '../../services/category.service';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent, NgClass],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  public CategoriesParent: Category[] = [];
  public categorySelected: Category = {} as Category;
  public router = inject(Router)
  constructor(private category: CategoryService) {

  }

  SearchAdverts(category: Category) {
    this.router.navigate(['/search'], { queryParams: { 'categoryId': category.id } })
  }

  SelectCategory(id: string) {
    this.category.getChildCategories(id).subscribe({
      next: (resp) => {
        this.categorySelected = resp
      },
      error: () => {

      }
    })
  }

  ngOnInit(): void {
    this.category.getHeadCategories().subscribe({
      next: (responce) => {
        this.CategoriesParent = responce.filter(category => category.parentId === "00000000-0000-0000-0000-000000000000")
        console.log(this.CategoriesParent)
      }
    })
  }

}
