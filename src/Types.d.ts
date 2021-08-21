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

export type Error = {
	raw: string;
	message: string;
	trace: string;
};

export type State<T> = { get(asDependency: boolean): T };
export type StateOrValue<T> = State<T> | T;
