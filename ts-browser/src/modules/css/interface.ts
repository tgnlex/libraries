type Len = number | string;
import type { Display, FlexDirection, Size } from '../../library/types/style.ts';
import type { Element } from '../../library/types.ts';

interface StyleModule {
  utils: {
    randomColor: () => string;
  },
  get: {
    width: (element: Element) => string;
    height: (element: Element) => string;
    size: (element: Element) => Size;
    bg: (element: Element) => string;
    color: (element: Element) => string;
    display: (element: Element) => string;
  }
  set: {
    width: (element: Element, width: Len) => void;
    height: (element: Element, height: Len) => void; 
    bg: (element: Element, color: string) => void;
    color: (element: Element, color: string) => void;
    display: (element: Element, display: Display) => void;
    direction: (element: Element, direction: FlexDirection) => void;
    size: (element: Element, width: Len, height: Len) => void;
    row: (element: Element) => void;
    column: (element: Element) => void;
    randomBg: (element: Element) => void;
    randomColor: (element: Element) => void;
  }
};

export type {Len, StyleModule};