import { CommonModule } from '@angular/common';
import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { UserService } from '../../services/user.service';
import { DialogModule } from 'primeng/dialog';
import { SplitButton, SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem, MessageService } from 'primeng/api';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, AuthModule, DialogModule, SplitButtonModule, FormsModule, ReactiveFormsModule, CardComponent, ToastModule],
  providers: [MessageService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnChanges {

  public user = inject(UserService);
  public router = inject(Router)
  public options: HTMLSelectElement = document.getElementById('menu') as HTMLSelectElement;
  public searchResult: string = '';

  public visibleRegister: boolean = false;
  public visibleLogin: boolean = false;
  public username: string = 'Modestra';

  items: MenuItem[];
  constructor(private message: MessageService, private fb: FormBuilder) {
    this.items = [
      {
        label: 'Настройки',
        command: () => {
          this.router.navigate(['/settings'])
        }
      },
      {
        label: 'Мои объявления',
        command: () => {
          this.router.navigate(['/advert/me'])
        }
      },
      {
        label: 'Выйти',
        command: () => {
          localStorage.removeItem('token')
          localStorage.removeItem('user_id')
        }
      },
    ];
  }

  public authform = this.fb.group({
    "name": [""],
    "login": ["", Validators.required],
    "password": ["", Validators.required]
  })

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    localStorage.getItem('token') ? this.user.getUserbyId(localStorage.getItem('user_id') || '').subscribe({
      next: (resp) => {
        this.username = resp.name
      }
    }) : this.username = ''
  }

  SearchByName() {
    return this.searchResult ? this.router.navigate(['/search'], { queryParams: { 'search': this.searchResult } }) : console.log("Нет результата");
  }

  ShowDialog() {
    localStorage.getItem('user_id') ? this.visibleLogin = true : this.visibleRegister = true
  }

  Register() {
    this.user.registerUser(this.authform.value).subscribe({
      next: (resp) => {
        localStorage.setItem('user_id', JSON.stringify(resp))
        this.visibleRegister = false
        this.message.add({ severity: 'success', summary: 'Success', detail: 'Регистрация прошла успешно' })
      },
      error: (error) => {
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Не удалось зарегестрировать пользоваталя' })
      }
    })
  }

  Login() {
    this.user.loginUser(this.authform.value).subscribe({
      next: (resp) => {
        localStorage.setItem('token', JSON.stringify(resp))
        this.visibleLogin = false
        this.message.add({ severity: 'success', summary: 'Success', detail: 'Авторизация прошла успешно' })
      },
      error: (error) => {
        this.message.add({ severity: 'error', summary: 'Error', detail: 'Не удалось авторизоваться' })
      }
    })
  }

}
