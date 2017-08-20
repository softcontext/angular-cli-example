import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InterpolationComponent } from './binding/interpolation.component';
import { OnewayComponent } from './binding/oneway.component';
import { OnewayStatementComponent } from './binding/oneway-statement.component';
import { TwowayComponent } from './binding/twoway.component';
import { NgclassComponent } from './binding/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle.component';
import { NgifComponent } from './binding/ngif.component';
import { NgswitchComponent } from './binding/ngswitch.component';
import { NgforComponent } from './binding/ngfor.component';
import { RefComponent } from './binding/ref.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'oneway', component: OnewayComponent },
  { path: 'oneway-statement', component: OnewayStatementComponent },
  { path: 'twoway', component: TwowayComponent },
  { path: 'ngclass', component: NgclassComponent },
  { path: 'ngstyle', component: NgstyleComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngswitch', component: NgswitchComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'ref', component: RefComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
