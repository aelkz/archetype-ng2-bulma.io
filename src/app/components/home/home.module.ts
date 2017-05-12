import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageModule } from '../../shared/message/message.module';
import { HomeComponent } from './home.component';
import { GrupoModule } from '../../components/grupo/grupo.module';
import { PerfilModule } from '../perfil/perfil.module';
import { AboutModule } from '../about/about.module';

import { UiNavbarComponent } from '../ui-navbar/ui-navbar.component';
import { UiUserInfoComponent } from '../ui-userinfo/ui-userinfo.component';
import { UiFooterComponent } from '../ui-footer/ui-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    GrupoModule,
    PerfilModule,
    AboutModule
  ],
  exports: [UiNavbarComponent, UiUserInfoComponent, UiFooterComponent],
  declarations: [HomeComponent, UiNavbarComponent, UiUserInfoComponent, UiFooterComponent]
})
export class HomeModule { }
