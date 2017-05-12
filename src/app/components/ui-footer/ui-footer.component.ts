// /-------------------------------------------------\
// | artefatos da biblioteca angular 2.x             |
// \-------------------------------------------------/
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

// /--------------------------------------------------\
// | form-grupo.component.ts                          |
// |--------------------------------------------------|
// | Componente para inclusão de grupos               |
// \--------------------------------------------------/
declare var uiFooterObject: any;

@Component({
  selector: 'app-ui-footer',
  templateUrl: 'ui-footer.component.html',
  styles: [` 
    .user-info { display: inline; }
    ul.dropdown-menu li{width:100%}
    ul.dropdown-menu li a{height:auto;padding:4px;text-align:left}
    .dropdown-menu{padding:7px 10px;border-radius:0 0 4px 4px;border:0;margin-top:0;color:#333;z-index:87;min-width:100%}
    .dropdown-menu li{margin-bottom:5px;white-space:nowrap}
    .dropdown-menu{position:fixed;width:100%;top:80px}
    .dropdown-menu{font-size:1.2em!important}

    .marcas{text-align:center;padding:15px 0 10px;margin-top:15px;width:100%;font-size:1.4em;font-weight:600;border-bottom:1px solid #e0e0e0}
    .marcas img{height:80px;margin:0 10px}
    .navegador,footer p{text-align:center;color:#fff}
    .navegador{padding:15px 0;margin-top:0;width:100%;color:#7A7A7A}

    .border-gradient{height:2px;display:block;width:100%;background:rgba(253,213,24,1);background:-moz-linear-gradient(left,rgba(253,213,24,1) 0,rgba(0,130,22,1) 50%,rgba(253,213,24,1) 100%);background:-webkit-gradient(left top,right top,color-stop(0,rgba(253,213,24,1)),color-stop(50%,rgba(0,130,22,1)),color-stop(100%,rgba(253,213,24,1)));background:-webkit-linear-gradient(left,rgba(253,213,24,1) 0,rgba(0,130,22,1) 50%,rgba(253,213,24,1) 100%);background:-o-linear-gradient(left,rgba(253,213,24,1) 0,rgba(0,130,22,1) 50%,rgba(253,213,24,1) 100%);background:-ms-linear-gradient(left,rgba(253,213,24,1) 0,rgba(0,130,22,1) 50%,rgba(253,213,24,1) 100%);background:linear-gradient(to right,rgba(253,213,24,1) 0,rgba(0,130,22,1) 50%,rgba(253,213,24,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fdd518', endColorstr='#fdd518', GradientType=1 )}
    #rodapePadrao{height:61px;}
    #wrapper-rodape-padrao{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px;height:100%}
    .acessibilidade-flag{padding-top:18px}
    #versao{padding-top:24px;font-size:11px;font-weight:bold;}
    .acessibilidade-flag 
    .link-acessibilidade{display:block;width:142px;text-transform:uppercase;line-height:25px;text-indent:-9999px}
    .rodape-info{position:absolute;font-size:11px;font-family:'Trebuchet MS';color:#707070;display:block;width:437px;margin-left:50%;left:-218.5px;top:26px}
  `]
})
export class UiFooterComponent implements OnInit {

  constructor() {
    console.log('footer constructor initialized');
  }

  init() {
    uiFooterObject.init();
  }

  ngOnInit(){
    this.init();
  }

}