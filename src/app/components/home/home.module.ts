import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageModule } from '../../shared/message/message.module';
import { HomeComponent } from './home.component';
import { GrupoModule } from '../../components/grupo/grupo.module';
import { PerfilModule } from '../perfil/perfil.module';

import { UiNavbarComponent } from '../ui-navbar/ui-navbar.component';
import { UiUserInfoComponent } from '../ui-userinfo/ui-userinfo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    GrupoModule,
    PerfilModule
  ],
  exports: [UiNavbarComponent, UiUserInfoComponent],
  declarations: [HomeComponent, UiNavbarComponent, UiUserInfoComponent]
})
export class HomeModule { }
