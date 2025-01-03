const domLog = {
  select: (selector: string) => console.info(document.querySelector(selector)),
  innerHtml: (element: HTMLElement) => console.info(element.innerHTML),
  text: (element: HTMLElement) => console.info(element.textContent),
  style: (element: HTMLElement) => console.info(element.style),
};

export default domLog;