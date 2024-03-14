import { Routes } from '@angular/router';
import { RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ScreenOneComponent } from './screen-one/screen-one.component';
import { ScreenTwoComponent } from './screen-two/screen-two.component';
import { ScreenThreeComponent } from './screen-three/screen-three.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';


export const routes: Routes = [
  {path: '', redirectTo: 'landingpage', pathMatch: 'full'},
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'screen-one', component: ScreenOneComponent},
  {path: 'screen-two', component: ScreenTwoComponent},
  {path: 'screen-three', component: ScreenThreeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {
  
  }
  export const routingComponents = 
  [
  LandingpageComponent,
  ScreenOneComponent,
  ScreenTwoComponent,
  ScreenThreeComponent,
  DashboardComponent,
  SignInComponent,
  SignUpComponent
 ];