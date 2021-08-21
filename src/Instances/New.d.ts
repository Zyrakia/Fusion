import { ChildrenSymbol } from "Instances/Children";
import { OnChangeSymbol } from "Instances/OnChange";
import { OnEventSymbol } from "Instances/OnEvent";
import { State, StateOrValue } from "Types";

export type ChildrenValue = StateOrValue<Instance> | Array<ChildrenValue>;
export type NewProperties<T extends Instance> = Partial<
	| {
			[K in keyof WritableInstanceProperties<T>]:
				| WritableInstanceProperties<T>[K]
				| State<WritableInstanceProperties<T>[K]>;
	  }
	| {
			[K in InstanceEventNames<T> as OnChangeSymbol<K>]: (newValue: T[K]) => void;
	  }
	| {
			[K in InstanceEventNames<T> as OnEventSymbol<K>]: T[K] extends RBXScriptSignal<infer C>
				? (...args: Parameters<C>) => void
				: never;
	  }
	| Record<ChildrenSymbol, ChildrenValue>
>;

export declare function New<T extends keyof CreatableInstances>(
	elementName: T,
): (properties: NewProperties<Instances[T]>) => Instances[T];
