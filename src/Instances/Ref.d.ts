import { MergeStrings } from "../Types";

export type RefSymbol = MergeStrings<"RefSymbol", "">;

/**
 * A special key for property tables, which stores a reference to the instance
 * in a user-provided Value object.
 */
export declare const Ref: RefSymbol;
