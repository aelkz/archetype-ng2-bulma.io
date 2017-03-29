import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/home.router';
import { AcessoRoutes } from './core/acesso/acesso.router';

/**
 * Configuração de 'Rotas' do Modulo 'Principal' da aplicação.
 */
export const routes: Routes = [
    ...HomeRoutes,
    ...AcessoRoutes
];

// Exportação das rotas para o contexto da aplicação.
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
