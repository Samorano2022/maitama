import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen-two',
  standalone: true,
  imports: [],
  templateUrl: './screen-two.component.html',
  styleUrl: './screen-two.component.css'
})
export class ScreenTwoComponent {
  constructor(private router: Router) {}
  onPrevious() {
    this.router.navigateByUrl('screen-one');
  }
  onNextt() {
    this.router.navigateByUrl('screen-three');
  }
}
