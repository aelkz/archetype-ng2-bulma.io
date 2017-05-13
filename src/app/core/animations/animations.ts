import { trigger, state, transition, animate, style } from '@angular/core';

export class Animations {
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

  public static showHide = trigger('showHide', [
    state('true', style({
      'height': '*',
      'display': 'block'
      })
    ),
    state('false', style({
      'display': 'none',
      'height': '0px'
      })
    ),
    transition('1 => 0', animate(250, style({height: 0}))),
    transition('0 => 1', animate(250, style({height: '*'})))
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
