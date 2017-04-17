import { Routes } from '@angular/router';

import { ListPerfilComponent } from './list-perfil/list-perfil.component';
import { FormPerfilComponent } from './form-perfil/form-perfil.component';

/**
 * Configuração de 'Rotas' do modulo 'Perfil'.
 */
export const PerfilRoutes: Routes = [
    {
        path: 'perfil/incluir',
        component: FormPerfilComponent,
        data: [{ 'acao': 'incluir' }]
    },
    {
        path: 'perfil/:id/alterar',
        component: FormPerfilComponent,
        data: [{ 'acao': 'alterar' }]
    },
    {
        path: 'perfil/:id/visualizar',
        component: FormPerfilComponent,
        data: [{ 'acao': 'visualizar' }]
    },
    {
        path: 'perfil/listar',
        component: ListPerfilComponent
    },
    {
        path: 'perfil',
        redirectTo: '/perfil/listar',
        pathMatch: 'full'
    },
];
