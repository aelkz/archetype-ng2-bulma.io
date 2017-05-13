import { trigger, state, transition, animate, style } from '@angular/core';

export class Animations {

  // /------------------------------------------------------------\
  // | animation:slideInOut                                       |
  // | transition -> slide left                                   |
  // | transition -> slide right                                  |
  // \------------------------------------------------------------/
  public static slideInOut = trigger('slideInOut', [
        state('true', style({transform: 'translate3d(0, 0, 0)'})),
        state('false', style({transform: 'translate3d(100%, 0, 0)'})),
        transition('1 => 0', animate('500ms ease-in')),
        transition('0 => 1', animate('500ms ease-out'))
        // OR
        // state('true', style({transform: 'translateX(100%)', opacity: 0})),
        // state('false', style({transform: 'translateX(0)', 'opacity': 1})),
        // transition('1 => 0', animate('500ms', style({transform: 'translateX(0)', opacity: 1}))),
        // transition('0 => 1', animate('500ms', style({transform: 'translateX(100%)', opacity: 0})))
    ]);

  // /------------------------------------------------------------\
  // | animation:showHide                                         |
  // | transition -> shrink                                       |
  // | transition -> show                                         |
  // \------------------------------------------------------------/
  public static showHide = trigger('showHide', [
    state('true', style({
      'height': '*',
      'display': 'block'
      })
    ),
    state('false', style({
      'height': '0px',
      'display': 'none'
      })
    ),
    transition('1 => 0', animate(400, style({height: 0}))),
    transition('0 => 1', animate(100, style({height: '*'})))
  ]);

  // /------------------------------------------------------------\
  // | animation:flyInOut                                         |
  // | transition -> left to right                                |
  // | transition -> * to right                                   |
  // | https://angular.io/resources/images/devguide/animations/   |
  // | animation_enter_leave.gif                                  |
  // \------------------------------------------------------------/
  public static flyInOut = trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ]);

  // /------------------------------------------------------------\
  // | animation:showPopScale                                     |
  // | transition -> shrink and hide                              |
  // | transition -> pop scale and bounce                         |
  // \------------------------------------------------------------/
  public static showPopScale = trigger('showPopScale', [
    state('true', style({
        'height': '*',
        'width': '*',
        'display': 'block'
      })
    ),
    state('false', style({
        'height': '0px',
        'width': '0px',
        'display': 'none'
      })
    ),
    transition('1 => 0',
      animate(400, style({height: 0}))
    ),
    transition('0 => 1',
      animate(100, style({height: '*'}))
    )
  ]);

  public static showHideTemp = trigger('showHide', [
    state('true', style({
        '-webkit-transform': 'translate3d(0px, 0px, 0px)',
        '-moz-transform': 'translate3d(0px, 0px, 0px)',
        '-o-transform': 'translate3d(0px, 0px, 0px)',
        '-ms-transform': 'translate3d(0px, 0px, 0px)',
        'transform': 'translate3d(0px, 0px, 0px)',
        'display': 'block'
      })
    ),
    state('false', style({
        '-webkit-transform': 'translate3d(0px, -10%, 0px)',
        '-moz-transform': 'translate3d(0px, -10%, 0px)',
        '-o-transform': 'translate3d(0px, -10%, 0px)',
        '-ms-transform': 'translate3d(0px, -10%, 0px)',
        'transform': 'translate3d(0px, -10%, 0px)',
        'display': 'none'
      })
    ),
    transition('1 => 0', animate('500ms ease-in')),
    transition('0 => 1', animate('500ms ease-out'))
  ]);

  public static showHideFast = trigger('showHide', [
      state('true', style({
          'display': 'block'
        })
      ),
      state('false', style({
          'display': 'none'
        })
      ),
      transition('1 => 0', animate('10ms ease-in')),
      transition('0 => 1', animate('10ms ease-out'))
    ]);

}
