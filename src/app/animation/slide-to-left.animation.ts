
import { trigger, state, animate, transition, style } from '@angular/animations';
export const slideToLeftAnimation = trigger('slideToLeftAnimation', [

    state('*', style({
        position: 'fixed',
        top: 0,
        left: 0,
        right: '30%',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    })),
    transition(':enter', [
        style({
           
            right: '-200%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        animate('1s ease-in-out', style({
            right: '30%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
        }))
    ]),
    transition(':leave', [
        animate('1s ease-in-out', style({
            right: '30%',
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);




