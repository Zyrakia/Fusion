import { MergeStrings } from "../Types";

export type RefSymbol = MergeStrings<"RefSymbol", "">;

/**
 * A special key for property tables, which lets a state
 * hold reference to the instance created with the `New` function.
 */
export declare const Ref: RefSymbol;
