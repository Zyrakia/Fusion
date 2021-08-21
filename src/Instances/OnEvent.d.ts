export declare type OnEventSymbol<T> = symbol & {
	type: "Symbol";
	name: "OnEvent";
	key: T;
};
export declare function OnEvent<T extends keyof InstanceEvents<Instance>>(name: T): OnEventSymbol<T>;
