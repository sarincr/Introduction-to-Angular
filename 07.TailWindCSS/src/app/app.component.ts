import { Component } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-tailwind-app';
}