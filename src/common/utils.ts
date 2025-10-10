/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom';
import { Direction } from './types';

export const smoothTransition = (updateDOM: () => void) => {
    if (!(document as any).startViewTransition) {
        updateDOM();
        return;
    }

    (document as any).startViewTransition(() => {
        ReactDOM.flushSync(() => {
            updateDOM();
        });
    });
};

export const digitToOrientations: { [key: number]: Direction[] } = {
    0: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'bottom-left',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'top-right',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    1: [
        'bottom-right',
        'horizontal',
        'bottom-left',
        'none',
        'top-right',
        'bottom-left',
        'vertical',
        'none',
        'none',
        'vertical',
        'vertical',
        'none',
        'none',
        'vertical',
        'vertical',
        'none',
        'bottom-right',
        'top-left',
        'top-right',
        'bottom-left',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    2: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'bottom-left',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    3: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'none',
        'bottom-right',
        'top-left',
        'vertical',
        'none',
        'top-right',
        'bottom-left',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    4: [
        'bottom-right',
        'bottom-left',
        'bottom-right',
        'bottom-left',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'vertical',
        'top-right',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'none',
        'none',
        'vertical',
        'vertical',
        'none',
        'none',
        'top-right',
        'top-left'
    ],
    5: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'bottom-left',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    6: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'bottom-left',
        'vertical',
        'vertical',
        'top-right',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    7: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'none',
        'none',
        'vertical',
        'vertical',
        'none',
        'none',
        'vertical',
        'vertical',
        'none',
        'none',
        'vertical',
        'vertical',
        'none',
        'none',
        'top-right',
        'top-left'
    ],
    8: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'bottom-left',
        'vertical',
        'vertical',
        'top-right',
        'top-left',
        'vertical',
        'vertical',
        'bottom-right',
        'bottom-left',
        'vertical',
        'vertical',
        'top-right',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ],
    9: [
        'bottom-right',
        'horizontal',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'bottom-left',
        'vertical',
        'vertical',
        'top-right',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'bottom-left',
        'vertical',
        'bottom-right',
        'horizontal',
        'top-left',
        'vertical',
        'top-right',
        'horizontal',
        'horizontal',
        'top-left'
    ]
};

export const directionToRotation = (direction: Direction): [number, number] => {
    switch (direction) {
        case 'vertical':
            return [90, 270];
        case 'horizontal':
            return [0, 180];
        case 'bottom-right':
            return [0, 90];
        case 'bottom-left':
            return [90, 180];
        case 'top-right':
            return [270, 0];
        case 'top-left':
            return [180, 270];
        case 'none':
            return [135, 135];
    }
};
