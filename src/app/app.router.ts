// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// /-------------------------------------------------\
// | artefatos do módulo/projeto                     |
// \-------------------------------------------------/
import { HomeRoutes } from './components/home/home.router';
import { AcessoRoutes } from './core/acesso/acesso.router';

// /--------------------------------------------------\
// | app.router.ts                                    |
// |--------------------------------------------------|
// | Configuração de rotas do módulo principal        |
// \--------------------------------------------------/
export const routes: Routes = [
    ...HomeRoutes,
    ...AcessoRoutes
];

// Exportação das rotas para o contexto da aplicação.
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
