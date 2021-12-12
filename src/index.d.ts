import { Spring } from "./Animation/Spring";
import { Tween } from "./Animation/Tween";
import { Children } from "./Instances/Children";
import { ChildrenValue, New, NewProperties } from "./Instances/New";
import { OnChange } from "./Instances/OnChange";
import { OnEvent } from "./Instances/OnEvent";
import { Animatable, CanBeState } from "./PubTypes";
import { Computed } from "./State/Computed";
import { ComputedPairs } from "./State/ComputedPairs";
import { Observer } from "./State/Observer";
import { Value } from "./State/Value";

declare namespace Fusion {
	// State
	export { Computed, ComputedPairs, Observer, Value };
	// Animation
	export { Spring, Tween };
	// Types
	export { Animatable, CanBeState };
	// Instances
	export { Children, ChildrenValue, New, NewProperties, OnChange, OnEvent };
}

export = Fusion;
