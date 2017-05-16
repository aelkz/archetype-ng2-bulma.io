import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageModule } from '../../shared/message/message.module';

import { HomeComponent } from './home.component';
import { GrupoModule } from '../../components/grupo/grupo.module';
import { PerfilModule } from '../perfil/perfil.module';
import { AboutModule } from '../about/about.module';
import { UsuarioModule } from '../usuario/usuario.module';

import { UiNavbarComponent } from '../../core/ui-navbar/ui-navbar.component';
import { UiUserInfoComponent } from '../../core/ui-userinfo/ui-userinfo.component';
import { UiFooterComponent } from '../../core/ui-footer/ui-footer.component';
import { UiNotificationModule } from '../../core/ui-notification/ui-notification.module';
import { UiSidenavComponent } from '../../core/ui-sidenav/ui-sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    GrupoModule,
    PerfilModule,
    AboutModule,
    UsuarioModule,
    UiNotificationModule
  ],
  exports: [UiNavbarComponent, UiUserInfoComponent, UiFooterComponent, UiSidenavComponent],
  declarations: [HomeComponent, UiNavbarComponent, UiUserInfoComponent, UiFooterComponent, UiSidenavComponent]
})
export class HomeModule { }
