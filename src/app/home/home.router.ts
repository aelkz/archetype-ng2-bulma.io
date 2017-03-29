import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { GrupoRoutes } from '../grupo/grupo.router';
import { PerfilRoutes } from '../core/perfil/perfil.router';

/**
 * Configuração de 'Rotas' do modulo 'Home'.
 */
export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            ...GrupoRoutes,
            ...PerfilRoutes
        ]
    }
];
