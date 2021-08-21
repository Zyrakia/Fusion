import { Animatable, State } from "Types";

export declare interface Tween<T> {
	type: "State";
	kind: "Tween";
	get(asDependency?: boolean): T;
	// setTweenInfo(newTweenInfo: TweenInfo): void;
}
export declare function Tween<T extends Animatable>(goalState: State<T>, tweenInfo?: TweenInfo): Tween<T>;
