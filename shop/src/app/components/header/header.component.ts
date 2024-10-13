import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';
import { UserService } from '../../services/user.service';
import { DialogModule } from 'primeng/dialog';
import { SplitButton, SplitButtonModule } from 'primeng/splitbutton';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, AuthModule, DialogModule, SplitButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  public user = inject(UserService);
  public VisibleLogin: boolean = false;
  public options: HTMLSelectElement = document.getElementById('menu') as HTMLSelectElement;
  public router = inject(Router)
  constructor() {

  }

  ngOnInit(): void {
    //this.user.getUserCurrent().subscribe((resp) => {
    //
    //})
  }

  OnAuth() {
    return this.user.isLoggedIn() ? this.VisibleLogin = true : this.VisibleLogin = false;
  }

  LoadUser() {
    console.log(this.options.value)
  }

}
