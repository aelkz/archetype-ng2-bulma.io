import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageModule } from '../core/message/message.module';
import { HomeComponent } from './home.component';
import { GrupoModule } from '../grupo/grupo.module';
import { PerfilModule } from '../core/perfil/perfil.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    GrupoModule,
    PerfilModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }