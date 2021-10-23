import { StateOrValue } from "../Types";

export declare interface ComputedPairs<T> {
	type: "State";
	kind: "ComputedPairs";
	get(asDependency?: boolean): T;
}

type KeepArrayMapOrRecord<I, R> = I extends Array<any>
	? Array<R>
	: I extends Map<infer K, any>
	? Map<K, R>
	: Record<keyof I, R>;

type KeysOfArrayMapOrRecord<I> = I extends Array<any> ? number : I extends Map<infer K, any> ? K : keyof I;

type PropertyOfArrayMapOrRecord<I> = I extends Array<infer T> ? T : I extends Map<any, infer V> ? V : I[keyof I];

export declare function ComputedPairs<In, Out>(
	input: StateOrValue<In>,
	processor: (key: KeysOfArrayMapOrRecord<In>, newValue: PropertyOfArrayMapOrRecord<In>) => Out,
	destructor?: (oldValue: Out) => void,
): ComputedPairs<KeepArrayMapOrRecord<In, Out>>;
