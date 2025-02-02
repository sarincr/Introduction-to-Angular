import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
// remove import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent], // Remove RouterOutlet
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-header-app';
}