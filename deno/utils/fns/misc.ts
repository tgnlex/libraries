export type Noop = () => void;
export const noop: Noop = (): void => {return};

export type Identity = <Type>(data: Type) => Type;
export const identity: Identity = <Type>(data: Type) => {
  return data;
}
interface MiscUtils {
  noop: Noop;
  identity: Identity;
}

const misc: MiscUtils = { noop, identity };


export default misc;
export type { MiscUtils };