import { Component } from '@angular/core';
import { MyComponent } from './my-component/my-component.component';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [MyComponent],
 template: `
   <app-my-component></app-my-component>
   <h1>Welcome to Global CSS App</h1>
 `,
 styles: [],
})
export class AppComponent {
 title = 'global-css-app';
}