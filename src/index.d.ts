/// <reference path="./jsx.d.ts" />

import { Spring } from "./Animation/Spring";
import { Tween } from "./Animation/Tween";
import { Children } from "./Instances/Children";
import { ChildrenValue, New } from "./Instances/New";
import { OnChange } from "./Instances/OnChange";
import { OnEvent } from "./Instances/OnEvent";
import { Compat } from "./State/Compat";
import { Computed } from "./State/Computed";
import { ComputedPairs } from "./State/ComputedPairs";
import { State } from "./State/State";
import { Animatable, Error } from "./Types";

// Fusion Lua
declare namespace Fusion {
	// Instances
	export { Children, New, OnChange, OnEvent };
	// State
	export { Compat, Computed, ComputedPairs, State };
	// Animation
	export { Spring, Tween };
	// Util types
	export { Animatable, ChildrenValue, Error };
}

// JSX Shims
declare namespace Fusion {
	type Element = Instance;
	type Fragment = Array<Instance>;
	export function createFragment(elements?: { [elementName: string]: Instance }): Fragment;
	export function createFragment(elements?: ReadonlyMap<string | number, Instance>): Fragment;
	export function createFragment(elements?: ReadonlyArray<Instance>): Fragment;
	export function createElement<T extends keyof CreatableInstances, I extends CreatableInstances[T]>(
		component: T,
		props?: {
			[K in keyof WritableInstanceProperties<I>]?:
				| WritableInstanceProperties<I>[K]
				| State<WritableInstanceProperties<I>[K]>;
		},
		onChanged?: {
			[K in InstancePropertyNames<I>]?: (newValue: I[K]) => void;
		},
		onEvent?: {
			[K in InstanceEventNames<I>]?: I[K] extends RBXScriptSignal<infer C>
				? (...args: Parameters<C>) => void
				: never;
		},
		children?: ChildrenValue,
	): I;
}

export = Fusion;
