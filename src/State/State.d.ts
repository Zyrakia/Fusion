export declare interface State<T> {
	type: "State";
	kind: "State";
	get(asDependency?: boolean): T;
	set(value: T): void;
}
export declare function State<T>(initialValue: T): State<T>;
