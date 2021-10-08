export type MergeStrings<S extends string, K> = K extends string | number | bigint | boolean | null | undefined
	? `____Fusion${S}${K}`
	: never;
