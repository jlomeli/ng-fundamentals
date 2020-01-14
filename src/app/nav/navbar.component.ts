import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent {
  constructor(private authService: AuthService) {}
}
