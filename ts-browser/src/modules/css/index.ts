import {random} from '../../library/utils.ts';
import { rgb } from '../../library/literals.ts';
import type { Element } from '../../library/types.ts';
import type { Display, FlexDirection, Size } from '../../library/types/style.ts';
import type {StyleModule, Len} from "./interface.ts";
const css: StyleModule = {
  utils: {
    randomColor() {
      const col =  rgb(random(255), random(255), random(255));
      return col;
    }
  },

  get: {
    width(element: Element) { return element.style.width },
    height(element: Element) { return element.style.height },
    size(element: Element) {
      let width = css.get.width(element);
      let height = css.get.height(element);
      const size = { width: width, height: height } as const;
      return size;
    },
    display(element: Element) { return element.style.display },
    color(element: Element) { return element.style.color },
    bg(element: Element) { return element.style.backgroundColor },
  },
  set: {
    bg(element: Element, color: string) { element.style.backgroundColor = color },
    color(element: Element, color: string) { element.style.color = color },
    display(element: Element, display: Display) { element.style.display = display },
    direction(element: Element, direction: FlexDirection) { element.style.flexDirection = direction},
    width(element: Element, width: Len) { css.set.width(element, width) },
    height(element: Element, height: Len) { css.set.height(element, height) },
    size(element: Element, width: Len, height: Len) {
      css.set.width(element, `${width}`);
      css.set.height(element, `${height}`);
    },
    row(element: Element) {
      css.set.display(element, "flex");
      css.set.direction(element, "row");
    },
    column(element: Element) { 
      css.set.display(element, "flex");
      css.set.direction(element, "column")
    },
    randomBg(element: Element)  {
      const color = css.utils.randomColor();
      css.set.bg(element, color);
    },
    randomColor(element: Element) {
      const color = css.utils.randomColor();
      css.set.color(element, color);
    },  
  }
};

export default css;