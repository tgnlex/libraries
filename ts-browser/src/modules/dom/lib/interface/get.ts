
interface DomGet {
  get: {
    select: (selector: string) => HTMLElement | null;
    innerHtml: (element: HTMLElement) => string;
    text: (element: HTMLElement) => string | null;
    style: (element: HTMLElement) => CSSStyleDeclaration;
  }
  };
  
  export type {DomGet};