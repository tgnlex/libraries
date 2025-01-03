import StatefulBase from "../../library/abstracts/stateful";
import type {Content, Attribute} from "./lib/types";
class DomModuleBase extends StatefulBase {
    public static select = (selector: string) => {
        const element = document.querySelector<HTMLElement>(selector);
        return element;
      };
    
      public static create = (tag: string, config = {}) => {
        const element = document.createElement(tag, config);
        return element;
      };
      public static insert = (element: HTMLElement, template: string) => { 
        element.innerHTML = template; 
      };
      public static append = () => {};
      public static text = (element: HTMLElement, content: Content) => { 
        element.textContent = `${content}`; 
      };
      public static event = (element: Element, event: string, cb: (e: Event) => any) => {
        element.addEventListener(event, (e) => cb(e));
      };
      public static attr = (element: Element, attribute: Attribute) => {
        element.setAttribute(attribute.key, `${attribute.value}`);
      }; 
};

export {DomModuleBase};