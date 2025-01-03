import {createWC} from "../utils/alias";
import InlineLogger from "./logger";
import Copyright from "./copyright";
const webComponents = {
  logger: createWC("logger", InlineLogger),
  copyright: createWC("copyright", Copyright)
}

function defineAll() {
  webComponents.logger;
  webComponents.copyright;
}

export {webComponents, defineAll};