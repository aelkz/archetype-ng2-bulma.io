import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';

import { GrupoService } from '../grupo/grupo.service';
import { PerfilService } from '../perfil/perfil.service';

/**
 * Modulo responsável por prover os serviços de integração a 'Web Api'.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServiceModule {

  /**
   * Convenção usada para que o módulo 'app' disponibilize as instâncias 'providers' como singleton para todos os modulos da aplicação.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [GrupoService,
        PerfilService]
    };
  }
}
