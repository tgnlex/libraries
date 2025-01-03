function dereference(cache: Map<string, any>, key: string) {
    if (!cache.get(key)?.deref()) {
      cache.delete(key)
    }
};

export { dereference };