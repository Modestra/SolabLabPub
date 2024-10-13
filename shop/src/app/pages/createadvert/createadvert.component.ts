import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../entities/card';
import { FileUploadModule } from 'primeng/fileupload';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';
import { AdvertService } from '../../services/advert.service';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

interface UploadEvent {
  files: File[];
}

@Component({
  selector: 'app-createadvert',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, FileUploadModule, CommonModule, ToastModule],
  templateUrl: './createadvert.component.html',
  styleUrl: './createadvert.component.scss',
  providers: [MessageService]
})
export class CreateadvertComponent implements OnInit {


  public categories_list = [] as Category[];
  public location_list: Array<any> = []
  public uploadsFiles: any[] = [];

  public router = inject(Router)
  public category = inject(CategoryService)
  constructor(private fb: FormBuilder,
    private _search: SearchService,
    private _advert: AdvertService,
    private message: MessageService) {

  }
  ngOnInit(): void {
    this.category.getHeadCategories().subscribe((resp) => {
      this.categories_list = resp
    })
  }

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadsFiles.push(file);
    }
  }

  public form = this.fb.group({
    user_id: [localStorage.getItem("user_id"), Validators.required],
    name: ['', Validators.required],
    description: [''],
    cost: [''],
    email: ['user@gmail.com', Validators.required],
    phone: ['88005553535', Validators.required],
    location: ['', Validators.required],
    categoryid: ['', Validators.required],
  })

  //Отдельная форма для загрузки изображений
  public images = this.fb.group({
    image: this.fb.array([this.fb.control('')])
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
    if (this.form.valid) {
      this._advert.createNewAdvert(this.form.value).subscribe({
        next: (resp) => {
          this.router.navigate(['/advert/me'])
        },
        error: (error) => {

        }
      })
    }
    this.message.add({ severity: 'error', summary: 'Error', detail: 'Заполните все поля' })
  }
}
