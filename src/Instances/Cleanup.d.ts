import { MergeStrings } from "../Types";

export type CleanupSymbol = MergeStrings<"RefSymbol", "">;

/**
 * A special key used to defined a cleanup function for an
 * instance.
 */
export declare const Cleanup: CleanupSymbol;
