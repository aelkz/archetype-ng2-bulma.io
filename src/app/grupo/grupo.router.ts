import { Routes } from '@angular/router';
import { FormGrupoComponent } from './form-grupo/form-grupo.component';
import { ListGrupoComponent } from './list-grupo/list-grupo.component';

/**
 * Configuração de 'Rotas' do modulo 'Grupo'.
 */
export const GrupoRoutes: Routes = [
	{
		path: 'grupo/incluir',
		component: FormGrupoComponent,
		data: [{ "acao": "incluir" }]
	},
	{
		path: 'grupo/:id/alterar',
		component: FormGrupoComponent,
		data: [{ "acao": "alterar" }]
	},
	{
		path: 'grupo/:id/visualizar',
		component: FormGrupoComponent,
		data: [{ "acao": "visualizar" }]
	},
	{
		path: 'grupo/listar',
		component: ListGrupoComponent
	},
	{
		path: 'grupo',
		redirectTo: '/grupo/listar',
		pathMatch: 'full'
	},
];
