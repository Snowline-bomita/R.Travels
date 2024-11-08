import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  phoneNumber: string = '9443172505 / 9500666550 / 046 - 33225556';
  email: string = 'saravanan@sriragavendratravels.com';
}
