export {}

type Repeat<T, K, S extends any[] = []> = K extends S['length'] ? S : Repeat<T, K,[...S, T]>
type A = Repeat<number, 3>; // [number, number, number]
type B = Repeat<string, 2>; // [string, string]
type C = Repeat<1, 1>; // [1]
type D = Repeat<0, 0>; // []
