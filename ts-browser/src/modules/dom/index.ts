// import type {DomModule} from "./interface";
import type { Content, Attribute } from "./lib/types";
import type { Element } from "../../library/types";
import {DomModuleBase} from "./base";
import { domGet, domLog } from "./submodules/index";
class Dom extends DomModuleBase {
  public static state: { current: Element | undefined };
  public static get = domGet;
  public static log = domLog;
  public static current = {
    get element () {
      if (Dom.state.current === undefined) { return undefined }; 
      return Dom.state.current;
    },
    select: (selector: string) => {
      const element = Dom.select(selector);
      if (element) { this.setCurrent(element) };
    },
    create: (tag: string, config = {}) => {
      const element = document.createElement(tag, config);
      this.setCurrent(element);
    },
    insert: (template: string) => { 
      const element = Dom.state.current;
      if (element) { Dom.insert(element, template) }; 
    },
    append: () => {},
    text: (content: Content) => { 
      const element = Dom.state.current;
      if (element) { Dom.text(element, `${content}`) };
    },
    event: (event: string, cb: () => any) => {
      const element = Dom.state.current;
      if (element) { Dom.event(element, event, cb) };
    },
    attr: (attribute: Attribute) => {
      const element = Dom.state.current;
      if (element) {
        element.setAttribute(attribute.key, `${attribute.value}`);
      }
    }, 
  }

};
export default Dom;