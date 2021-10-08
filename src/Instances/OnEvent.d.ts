import { MergeStrings } from "../utilTypes";

export declare function OnEvent<K extends string>(name: K): MergeStrings<"OnEventSymbol", K>;
