

class InlineLogger extends HTMLElement {
  name = "logger";
  constructor() {
    super()
    console.info(this.getAttribute('message'))
  }
}
export default InlineLogger;
