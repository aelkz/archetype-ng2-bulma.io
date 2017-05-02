// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

// /-------------------------------------------------\
// | artefatos compartilhados do projeto             |
// \-------------------------------------------------/
import { ServiceModule } from './core/service.module';
import { MessageModule } from './shared/message/message.module';
import { MessageResourceProvider } from './shared/message/message.resource';
import { MessageResourceImpl } from './app.message';
import { ValidationModule } from './shared/validation/validation.module';
import { ValidationResourceProvider } from './shared/validation/validation.resource';

// /-------------------------------------------------\
// | artefatos/componentes da aplicação              |
// \-------------------------------------------------/
import { HomeModule } from './components/home/home.module';
import { AcessoModule } from './core/acesso/acesso.module';
import { AppComponent } from './app.component';
import { AppRouting } from './app.router';

// /--------------------------------------------------\
// | app.module.ts                                    |
// |--------------------------------------------------|
// | Módulo principal da aplicação (root module)      |
// \--------------------------------------------------/
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
    AppRouting
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
