import { CanBeState } from "../PubTypes";
import { KeepArrayMapOrRecord, KeysOfArrayMapOrRecord, PropertyOfArrayMapOrRecord } from "../Types";

export declare interface ComputedPairs<T> {
	type: "State";
	kind: "ComputedPairs";
	/*
		Returns the current value of this ComputedPairs object.
		The object will be registered as a dependency unless `asDependency` is false.
	*/
	get(asDependency?: boolean): T;
}
/*
	Constructs a new computed state object which maps pairs of an array using
	a `processor` function.

	Optionally, a `destructor` function can be specified for cleaning up values.
	If omitted, the default cleanup function will be used instead.
*/
export declare function ComputedPairs<In, Out>(
	input: CanBeState<In>,
	processor: (key: KeysOfArrayMapOrRecord<In>, newValue: PropertyOfArrayMapOrRecord<In>) => Out,
	destructor?: (oldValue: Out) => void,
): ComputedPairs<KeepArrayMapOrRecord<In, Out>>;
