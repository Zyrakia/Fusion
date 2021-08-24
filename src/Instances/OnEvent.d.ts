export declare type OnEventSymbol<T> = symbol & {
	type: "Symbol";
	name: "OnEvent";
	key: T;
};
export declare function OnEvent<K extends string>(name: K): OnEventSymbol<K>;
