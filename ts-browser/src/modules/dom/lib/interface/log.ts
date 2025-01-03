
interface DomLog {
  log: {
    select: (selector: string) => void;
    innerHtml: (element: HTMLElement) => void;
    text: (element: HTMLElement) => void;
    style: (element: HTMLElement) => void;
  }
};

export type {DomLog};