import type { DomLog, DomGet } from "./interface/submodules";
import type { Attribute } from "./types";
interface DomModule extends DomLog, DomGet {
    history: HTMLElement[];
    current: undefined | HTMLElement;
    query: (selector: string) => HTMLElement | null;
    select: (selector: string) => void;
    create: (element: string, config: any) => HTMLElement;
    insert: (parent: HTMLElement, template: string) => void;
    event: (element: HTMLElement, e: Event, cb: () => any) => void;
    attr: (element: HTMLElement, attribute: Attribute) => void;
    append: () => void;
    text: (element: HTMLElement, content: string) => void;
  }

  export type {DomModule};