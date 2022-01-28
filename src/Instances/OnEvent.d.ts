import { MergeStrings } from "../Types";

export type OnEventSymbol<K> = MergeStrings<"OnEventSymbol", K>;

/**
 * Generates symbols used to denote event handlers when working with the `New`
 * function.
 */
export declare function OnEvent<K extends string>(name: K): OnEventSymbol<K>;
