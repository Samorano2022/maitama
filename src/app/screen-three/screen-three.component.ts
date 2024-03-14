import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-three',
  standalone: true,
  imports: [],
  templateUrl: './screen-three.component.html',
  styleUrl: './screen-three.component.css'
})
export class ScreenThreeComponent {
  constructor(private router: Router) {}
  onPreviouss() {
    this.router.navigateByUrl('screen-two');
  }
  onProceed() {
    this.router.navigateByUrl('sign-up');
  }
  onLanding() {
    this.router.navigateByUrl('landingpage');
  }
}
