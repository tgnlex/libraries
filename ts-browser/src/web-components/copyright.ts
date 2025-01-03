

class Copyright extends HTMLElement {
  constructor() {
    super() 
    const symbol = document.createElement("span");
    symbol.textContent = "&copy;";
    const shadowRoot = this.attachShadow({
        mode: "closed",
    });
    shadowRoot.appendChild(symbol);
  }
};
export default Copyright;