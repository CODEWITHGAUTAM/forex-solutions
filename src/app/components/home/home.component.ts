import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  redirectToWhatsApp() {
    window.open('https://wa.me/1234567890', '_blank');
  }
}
