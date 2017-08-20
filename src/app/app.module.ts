import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common'; // BrowserModule 임포트로 생략이 가능하다.
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { InterpolationComponent } from './binding/interpolation.component';
import { OnewayComponent } from './binding/oneway.component';
import { TwowayComponent } from './binding/twoway.component';
import { ContactComponent } from './binding/contact.component';
import { MyClickDirective } from './binding/my-click.directive';
import { OnewayStatementComponent } from './binding/oneway-statement.component';
import { NgclassComponent } from './binding/ngclass.component';
import { NgstyleComponent } from './binding/ngstyle.component';
import { NgifComponent } from './binding/ngif.component';
import { NgswitchComponent } from './binding/ngswitch.component';
import { NgforComponent } from './binding/ngfor.component';
import { RefComponent } from './binding/ref.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule, HttpModule, FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    InterpolationComponent,
    OnewayComponent,
    TwowayComponent,
    ContactComponent,
    MyClickDirective,
    OnewayStatementComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    RefComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
