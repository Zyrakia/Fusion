// PubTypes that can be expressed as vectors of numbers, and so can be animated.
export type Animatable =
	| number
	| CFrame
	| Color3
	| ColorSequenceKeypoint
	| DateTime
	| NumberRange
	| NumberSequenceKeypoint
	| PhysicalProperties
	| Ray
	| Rect
	| Region3
	| Region3int16
	| UDim
	| UDim2
	| Vector2
	| Vector2int16
	| Vector3
	| Vector3int16;

// A graph object which can have dependents.
export type Dependency = {
	dependentSet: Set<Dependent>;
};

// A graph object which can have dependencies.
export type Dependent = {
	update: (dependent: Dependent) => boolean;
	dependencySet: Set<Dependency>;
};

// An object which stores a piece of reactive state.
export type StateObject<T> = {
	type: "State";
	kind: string;
	get(asDependency?: boolean): T;
};

export type CanBeState<T> = StateObject<T> | T;
