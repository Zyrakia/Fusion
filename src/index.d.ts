/// <reference path="./jsx.d.ts" />

import { Spring } from "./Animation/Spring";
import { Tween } from "./Animation/Tween";
import { Children } from "./Instances/Children";
import { ChildrenValue, New, NewProperties } from "./Instances/New";
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
	export { Animatable, ChildrenValue, Error, NewProperties };
}

// JSX Shims
declare namespace Fusion {
	export function createFragment(elements?: { [elementName: string]: Instance }): Array<Instance>;
	export function createFragment(elements?: ReadonlyMap<string | number, Instance>): Array<Instance>;
	export function createFragment(elements?: ReadonlyArray<Instance>): Array<Instance>;
	export function createElement<T extends keyof CreatableInstances>(
		component: T,
		props: NewProperties<Instances[T]>,
		children: ChildrenValue,
	): Instances[T];
}

export = Fusion;
