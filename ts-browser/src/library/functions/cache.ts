import { dereference } from "../helpers/dereference";
type Getter = (key: string) => any;
function cached(getter: Getter) {
    const cache = new Map<string, any>()
    const registry = new FinalizationRegistry(
        (key: string) => dereference(cache, key)
    )
    return async (key: string) => {
      if (cache.has(key)) {
        const derefValue = cache.get(key).deref();
        if (derefValue !== undefined) {
          return derefValue;
      }        
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value))
  }
}
export default cached;