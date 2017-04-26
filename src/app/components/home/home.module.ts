import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MessageModule } from '../../shared/message/message.module';
import { HomeComponent } from './home.component';
import { GrupoModule } from '../../components/grupo/grupo.module';
import { PerfilModule } from '../perfil/perfil.module';
import { UsuarioModule } from '../usuario/usuario.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MessageModule,
    GrupoModule,
    PerfilModule,
    UsuarioModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
