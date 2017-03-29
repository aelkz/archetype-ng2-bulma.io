import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceModule } from './core/core.module';
import { MessageModule } from './core/message/message.module';
import { MessageResourceProvider } from './core/message/message.resource';
import { MessageResourceImpl } from './core/app.message';
import { ValidationModule } from './core/validation/validation.module';
import { ValidationResourceProvider } from './core/validation/validation.resource';

import { HomeModule } from './home/home.module';
import { AcessoModule } from './core/acesso/acesso.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.router';

import { SweetAlert2Module } from '@toverux/ngsweetalert2';

/**
 * Modulo principal da aplicação.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ServiceModule.forRoot(),
    MessageModule.forRoot(),
    ValidationModule,
    HomeModule,
    AcessoModule,
    BrowserModule,
    HttpModule,
    AppRouting,
    SweetAlert2Module
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: MessageResourceProvider,
    useValue: MessageResourceImpl,
  },
  {
    provide: ValidationResourceProvider,
    useValue: MessageResourceImpl,
  }]
})
export class AppModule { }