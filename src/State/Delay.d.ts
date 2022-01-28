import { StateObject } from "../PubTypes";

export declare interface Delay<T> {
	type: "State";
	kind: "Delay";

	/**
	 * Returns the current value of this Delay object.
	 * The object will be registered as a dependency unless `asDepdendency` is false.
	 */
	get(asDependency?: boolean): T;
}

/**
 * Constructs a new delay object which wraps a value object
 * and delays its updates
 */
export declare function Delay<T>(followerState: StateObject<T>, delayDuration: number): Delay<T>;
