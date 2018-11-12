
import { trigger, state, animate, transition, style } from '@angular/animations';

export const RightToLeftAnimation = trigger('RightToLeftAnimation', [

    // state('*', style({
    //     position: 'fixed',
    //     top: '25%',
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     // backgroundColor: 'white'
    // })),
    // transition(':enter', [
    //     style({
           
    //         transition:'Transform:translateX(1000px)',
    //         backgroundColor: 'rgba(0, 0, 0, 0)'
    //     }),
    //     animate('2s ease-in-out', style({
    //         // right: 0,
    //         // backgroundColor: 'white'
    //         transition:'Transform:translateY(0)',
    //     }))
    // ]),
    // transition(':leave', [
    //     animate('1s ease-in-out', style({
    //         right: '0',
    //         backgroundColor: 'rgba(0, 0, 0, 0)'
    //     }))
    // ])
    state('*', style({
        transform: 'translateX(1000px)'
    })),
    transition(':enter',[
        style({
            transform: 'translateX(1000px)'
        }),
        animate('2s ease-in-out',style({
            transform: 'translateX(0)',
            backgroundColor:'green'
        }))
    ])
    
    
]);




