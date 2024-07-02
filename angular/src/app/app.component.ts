import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { DefaultModule } from './default/default.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular 18ư1';
}
