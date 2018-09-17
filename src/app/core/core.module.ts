import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule} from 'diva-shared-apps/shared.module';
import {  AuthGuard} from './auth/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers : [AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }]
})
export class CoreModule { }
