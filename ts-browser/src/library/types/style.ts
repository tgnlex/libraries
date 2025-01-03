type Display = "inline" | "block" | "inline-block" | 
               "grid" | "flex" | "table" | "table-row" | 
               "list-item" | "inherit" |  "none";

type Percent = `${number}%`;
type PixelValue = `${number}px`;
type ViewportWidth = `${number}vw`;
type ViewportHeight = `${number}vh`;
type FlexDirection = "row" | "column";
type Size = {width: string, height: string };


export type { Percent, PixelValue, ViewportWidth, ViewportHeight };

export type { Display, Size };
export type { FlexDirection }