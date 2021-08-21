export declare interface Computed<T> {
	type: "State";
	kind: "Computed";
	get(asDependency?: boolean): T;
}
export declare function Computed<T>(callback: () => T): Computed<T>;
