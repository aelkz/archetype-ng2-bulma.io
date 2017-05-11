// /-------------------------------------------------\
// | Componentes angular                             |
// \-------------------------------------------------/
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Component responsável pela Inclusão e Alteração de 'Perfil'.
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  private router: Router;

  /**
   * Construtor da classe.
   *
   * @param perfilService
   * @param messageService
   * @param router
   * @param route
   */
  constructor(router: Router, route: ActivatedRoute) {
    this.router = router;
  }

 }