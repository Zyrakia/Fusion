import { StateOrValue } from "Types";

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
export declare function ComputedPairs<I, R>(
	input: StateOrValue<I>,
	processor: <K extends keyof I>(key: K, newValue: I[K]) => R,
	destructor: (oldValue: R) => void,
): ComputedPairs<KeepArrayMapOrRecord<I, R>>;
