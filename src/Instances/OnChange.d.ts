import { MergeStrings } from "../Types";

export type OnChangeSymbol<K> = MergeStrings<"OnChangeSymbol", K>;
/*
	Generates symbols used to denote property change handlers when working with
	the `New` function.
*/
export declare function OnChange<K extends string>(name: K): OnChangeSymbol<K>;
