import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, AuthModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor() {

  }


}
