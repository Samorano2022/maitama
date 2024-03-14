import { Component, Inject } from '@angular/core';
// import { Router } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

export class LandingpageComponent {
  constructor(private router: Router) {}
  getStarted() {
    this.router.navigateByUrl('screen-one');
  }
}


