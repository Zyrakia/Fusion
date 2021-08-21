import { Spring } from "Animation/Spring";
import { Tween } from "Animation/Tween";
import { Children } from "Instances/Children";
import { New } from "Instances/New";
import { OnChange } from "Instances/OnChange";
import { OnEvent } from "Instances/OnEvent";
import { Compat } from "State/Compat";
import { Computed } from "State/Computed";
import { ComputedPairs } from "State/ComputedPairs";
import { State } from "State/State";
import { Animatable, Error } from "Types";

declare namespace Fusion {
	// Instances
	export { Children, New, OnChange, OnEvent };
	// State
	export { Compat, Computed, ComputedPairs, State };
	// Animation
	export { Spring, Tween };
	// Util types
	export { Animatable, Error };
}

export = Fusion;
