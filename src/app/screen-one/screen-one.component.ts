import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-one',
  standalone: true,
  imports: [],
  templateUrl: './screen-one.component.html',
  styleUrl: './screen-one.component.css'
})
export class ScreenOneComponent {
  constructor(private router: Router) {}
  onNext() {
    this.router.navigateByUrl('screen-two');
  }
  onSkip() {
    this.router.navigateByUrl('sign-up');
  }
}
