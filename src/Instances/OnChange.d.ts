export declare type OnChangeSymbol<T> = symbol & {
	type: "Symbol";
	name: "OnChange";
	key: T;
};
export declare function OnChange<T extends keyof InstanceProperties<Instance>>(name: T): OnChangeSymbol<T>;
