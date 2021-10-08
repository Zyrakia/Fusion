import { ChildrenSymbol } from "../Instances/Children";
import { State, StateOrValue } from "../Types";
import { MergeStrings } from "../utilTypes";

export type ChildrenValue = StateOrValue<Instance | undefined> | Array<ChildrenValue>;
export type NewProperties<T extends Instance> = Partial<
	| {
			[K in keyof WritableInstanceProperties<T>]:
				| WritableInstanceProperties<T>[K]
				| State<WritableInstanceProperties<T>[K]>;
	  }
	| {
			[K in InstancePropertyNames<T> as MergeStrings<"OnChangeSymbol", K>]: (newValue: T[K]) => void;
	  }
	| {
			[K in InstanceEventNames<T> as MergeStrings<"OnEventSymbol", K>]: T[K] extends RBXScriptSignal<infer C>
				? (...args: Parameters<C>) => void
				: never;
	  }
	| Record<ChildrenSymbol, ChildrenValue>
>;

export declare function New<T extends keyof CreatableInstances>(
	elementName: T,
): (properties: NewProperties<Instances[T]>) => Instances[T];
