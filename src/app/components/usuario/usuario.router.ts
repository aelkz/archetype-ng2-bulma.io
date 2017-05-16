import { Routes } from '@angular/router';

import { ListUsuarioComponent } from './list-usuario.component';

/**
 * Configuração de 'Rotas' do modulo 'Usuario'.
 */
export const UsuarioRoutes: Routes = [
    {
        path: 'usuario/listar',
        component: ListUsuarioComponent
    },
    {
        path: 'usuario',
        redirectTo: '/usuario/listar',
        pathMatch: 'full'
    }
];
