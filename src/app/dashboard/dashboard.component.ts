import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
import { SignUpComponent } from "../sign-up/sign-up.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { WelcomeTextComponent } from "../welcome-text/welcome-text.component";
import { CardOneComponent } from "../card-one/card-one.component";


@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SidebarComponent, HeaderComponent, SignUpComponent, TableModule, ButtonModule, WelcomeTextComponent, CardOneComponent]
})
export class DashboardComponent {
  products: any[] = [];
  constructor(private router:Router){}
    onLandingpage() { 
    this.router.navigateByUrl('landingpage');
  }
}


