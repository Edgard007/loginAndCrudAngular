import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// ==> Bootstrap modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ==> NG-Zorro modules
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// ==> Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';

// Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ==> NG Zorro
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzNotificationModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
