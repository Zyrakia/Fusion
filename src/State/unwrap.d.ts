import { CanBeState, StateObject } from "..";

/**
 * A common interface for accessing the values of state objects or constants.
 */
export declare function unwrap<T>(
	value: CanBeState<T>,
	useDependency?: boolean,
): T extends StateObject<infer U> ? U : T;
