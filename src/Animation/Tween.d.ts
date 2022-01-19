import { Animatable, CanBeState, StateObject } from "../PubTypes";

export declare interface Tween<T> {
	type: "State";
	kind: "Tween";
	/*
		Returns the current value of this Tween object.
		The object will be registered as a dependency unless `asDependency` is false.
	*/
	get(asDependency?: boolean): T;
	// setTweenInfo(newTweenInfo: TweenInfo): void;
}
export declare function Tween<T>(goalState: StateObject<T>, tweenInfo?: CanBeState<TweenInfo>): Tween<T>;
