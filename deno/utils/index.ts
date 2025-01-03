import type { MathUtils } from "./fns/math";

import type { MiscUtils } from "./fns/misc";
import math from "./fns/math";

import misc from "./fns/misc";

interface Utilities {
  math: MathUtils;
  misc: MiscUtils;
}
const utils: Utilities = {
  math: math,
  misc: misc,
};
export type { Utilities };
export default utils;
export { math, misc };
