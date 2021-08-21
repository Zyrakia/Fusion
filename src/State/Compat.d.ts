import { State } from "../Types";

export declare interface Compat<T> {
	type: "State";
	kind: "Compat";
	onChange(callback: () => void): () => void;
}
export declare function Compat<T>(watchedState: State<T>): Compat<T>;
