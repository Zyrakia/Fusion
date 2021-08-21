export declare type ChildrenSymbol = symbol & {
	readonly _nominal_ChildrenSymbol: unique symbol;
	type: "Symbol";
	name: "Children";
};
export declare const Children: ChildrenSymbol;
