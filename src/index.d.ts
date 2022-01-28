import { Spring } from "./Animation/Spring";
import { Tween } from "./Animation/Tween";
import { Children } from "./Instances/Children";
import { Cleanup } from "./Instances/Cleanup";
import { ChildrenValue, New, NewProperties } from "./Instances/New";
import { OnChange } from "./Instances/OnChange";
import { OnEvent } from "./Instances/OnEvent";
import { Ref } from "./Instances/Ref";
import { Animatable, CanBeState, StateObject, Version } from "./PubTypes";
import { Computed } from "./State/Computed";
import { ComputedPairs } from "./State/ComputedPairs";
import { Delay } from "./State/Delay";
import { Observer } from "./State/Observer";
import { Value } from "./State/Value";

declare namespace Fusion {
	// State
	export { Computed, ComputedPairs, Delay, Observer, Value };
	// Animation
	export { Spring, Tween };
	// Types
	export { Animatable, CanBeState, StateObject, Version };
	// Instances
	export { Children, ChildrenValue, Cleanup, New, NewProperties, OnChange, OnEvent, Ref };
	// Misc
	export const version: Version;
}

export = Fusion;
