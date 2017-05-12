import { trigger, state, transition, animate, style } from '@angular/core';

export class Animations {
    public static slideInOut = trigger('slideInOut', [
        state('true', style({transform: 'translate3d(0, 0, 0)'})),
        state('false', style({transform: 'translate3d(100%, 0, 0)'})),
        transition('1 => 0', animate('500ms ease-in')),
        transition('0 => 1', animate('500ms ease-out'))
    ]);
}