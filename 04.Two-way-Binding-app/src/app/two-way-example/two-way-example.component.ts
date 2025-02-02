import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-example',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-example.component.html',
  styleUrl: './two-way-example.component.css'
})
export class TwoWayExampleComponent {
   userName: string = '';
   userAge: number | null = null;
}