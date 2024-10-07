import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Category } from '../../entities/card';
import { CategoryService } from '../../services/category.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent, NgClass],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  public CategoriesParent: Category[] = [];
  public categorySelected: string = "";
  constructor(private category: CategoryService) {

  }

  //Загружать дочерние категории
  getChildsCategories() {

  }

  SelectCategory(event: Event) {

  }

  ngOnInit(): void {
    this.category.getHeadCategories().subscribe((resp) => {
      this.CategoriesParent = resp
      console.log(this.CategoriesParent)
    })
  }

}
