import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../entities/card';
import { FileUploadModule, UploadEvent } from 'primeng/fileupload';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-createadvert',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, FileUploadModule],
  templateUrl: './createadvert.component.html',
  styleUrl: './createadvert.component.scss'
})
export class CreateadvertComponent implements OnInit {

  public categories_list = [] as Category[];
  public location_list: Array<any> = []
  constructor(private _category: CategoryService,
    private fb: FormBuilder,
    private _search: SearchService) {

    const category = inject(CategoryService)
    this._category = category

  }
  ngOnInit(): void {
    this._category.getHeadCategories().subscribe((resp) => {
      this.categories_list = resp
    })
  }

  onUpload(event: UploadEvent) {
    console.log("")
  }

  public form = this.fb.group({
    category: ['', Validators.required],
    title: ['', Validators.required],
    description: [''],
    location: ['', Validators.required],
    images: this.fb.array([this.fb.control('')]),
    cost: ['']
  })

  SetChildrensList(event: any) {

  }

  SearchLocation(event: string) {
    if (event.length > 5) {
      this._search.SearchLocationByString(event).subscribe({
        next: (resp) => {
          this.location_list = resp.suggestions as Array<any>
          this.location_list = this.location_list.map((value) => {
            return value.value
          })
        },
        error: () => {

        },
        complete: () => {

        }
      })
    }
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
