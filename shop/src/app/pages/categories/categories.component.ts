import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Category } from '../../entities/card';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  public CategoriesParent : Category[] = [];
  constructor(private category : CategoryService) {

  }

  //Загружать дочерние категории
  getChildsCategories(){

  }
  ngOnInit(): void {
    this.category.getHeadCategories().subscribe((resp)=>{
      this.CategoriesParent = resp
      console.log(this.CategoriesParent)
    })
  }

}
