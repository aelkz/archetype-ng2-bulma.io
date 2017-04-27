import { Routes } from '@angular/router';

import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

/**
 * Configuração de 'Rotas' do modulo 'Usuario'.
 */
export const UsuarioRoutes: Routes = [
  {
    path: 'usuario/incluir',
    component: FormUsuarioComponent,
    data: [{ 'acao': 'incluir' }]
  },
  {
    path: 'usuario/:id/alterar',
    component: FormUsuarioComponent,
    data: [{ 'acao': 'alterar' }]
  },
  {
    path: 'usuario/:id/visualizar',
    component: FormUsuarioComponent,
    data: [{ 'acao': 'visualizar' }]
  },
  {
    path: 'usuario',
    redirectTo: '/usuario/listar',
    pathMatch: 'full'
  }
];
