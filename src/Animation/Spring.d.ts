import { Animatable, State } from "Types";

export declare interface Spring<T> {
	type: "State";
	kind: "Spring";
	get(asDependency?: boolean): T;
	setDamping(damping: number): void;
	setSpeed(damping: number): void;
	setPosition(position: T): void;
	setVelocity(velocity: T): void;
	addVelocity(velocity: T): void;
}
export declare function Spring<T extends Animatable>(goalState: State<T>, speed?: number, damping?: number): Spring<T>;
