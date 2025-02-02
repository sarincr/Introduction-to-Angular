
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // Make this a standalone component
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
   title: string = 'My Awesome App';
}