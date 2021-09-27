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
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTableModule } from 'ng-zorro-antd/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// ==> Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ==> Pages
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { EmpleadoComponent } from './admin/empleado/empleado.component';
import { NavComponent } from './components/nav/nav.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LoginComponent, NavComponent, EmpleadoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzNotificationModule,
    NzTableModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
