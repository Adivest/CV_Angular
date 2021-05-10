import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cv-app';
  custom = {
    image: './assets/profile.jpg',
    name: 'Ciupe Adrian',
    job: 'FRONTEND WEB DEVELOPER',
    town: 'Sibiu',
    phoneNumber: '0741077791',
    email: 'ciupe_adrian@yahoo.com',
    portofolioLink: 'https://adrian-ciupe.netlify.app/',
  };
}
