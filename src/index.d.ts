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
import { Animatable, Error, StateOrValue } from "./Types";

// Fusion Lua
declare namespace Fusion {
	// State
	export { Compat, Computed, ComputedPairs, State };
	// Animation
	export { Spring, Tween };
	// Types
	export { Animatable, Error, StateOrValue };
	// Instances
	export { Children, ChildrenValue, New, NewProperties, OnChange, OnEvent };
}

export = Fusion;
