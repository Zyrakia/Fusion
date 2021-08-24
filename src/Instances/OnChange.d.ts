export declare type OnChangeSymbol<T> = symbol & {
	type: "Symbol";
	name: "OnChange";
	key: T;
};
export declare function OnChange<K extends string>(name: K): OnChangeSymbol<K>;
