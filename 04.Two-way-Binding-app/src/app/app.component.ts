import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayExampleComponent } from './two-way-example/two-way-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwoWayExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'two-way-binding-app';
}