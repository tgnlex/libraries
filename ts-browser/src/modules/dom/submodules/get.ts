const domGet = {
  select: (selector: string) => { return document.querySelector(selector)},
  innerHtml: (element: HTMLElement) => { return element.innerHTML },
  text: (element: HTMLElement) => { return element.textContent },
  style: (element: HTMLElement) => { return element.style },
};

export default domGet;