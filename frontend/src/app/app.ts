import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './layout/header/app-header';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = 'mean-template-ng';
  protected readonly version = '0.0.0';
}
